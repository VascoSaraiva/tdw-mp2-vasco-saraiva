import { MockDataItem } from '@/types';
import { sql, db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: { row: number } },
) {

    const client = await db.connect()

    try {
        const response : any = await client.sql`
        SELECT *
        FROM posts
        ORDER BY id DESC
        LIMIT 10 OFFSET ${params.row};
        `;

        
        let newResponse : MockDataItem[] = []
        await Promise.all(
            response.rows.map(async (row: any) => {
                const responsePlaceDetails = await fetch(process.env.NEXT_PUBLIC_VERCEL_URL + '/api/placeDetails/' + row.places[0], { next: { revalidate: 3600 } })
    
                const dataPlaceDetails = await responsePlaceDetails.json()
                row.placePhotoURL = dataPlaceDetails.photo
                newResponse.push(row)
            })
        )
        
        
        return NextResponse.json( newResponse, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

}