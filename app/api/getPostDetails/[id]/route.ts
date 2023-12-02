import { MockDataItem } from '@/types';
import { sql, db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(
    request: Request,
    { params }: { params: { id: number } },
) {

    const client = await db.connect()

    try {
        const response: any = await client.sql`
        SELECT *
        FROM posts
        WHERE id = ${params.id}
        `;

        let completeData = response.rows[0]

        await Promise.all(
            response.rows.map(async (item: any) => {
              await Promise.all(
                item.places.map(async (placeId: string, index: number) => {
                  const newResponse = await fetch(`${process.env.NEXT_PUBLIC_VERCEL_URL}/api/placeDetails/${placeId}`);
                  const data = await newResponse.json();
                  
                
                  completeData.places[index] = data;
                })
              );
            })
          );
          
          




        return NextResponse.json(completeData, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }

}