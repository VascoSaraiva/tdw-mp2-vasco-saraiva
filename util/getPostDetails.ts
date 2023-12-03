import { db } from "@vercel/postgres";
import getPlaceDetails from "./getPlaceDetails";

const getPostDetails = async (id: string) => {

    const client = await db.connect()

    try {

        const response: any = await client.sql`
          SELECT *
          FROM posts
          WHERE id = ${id}
          `;

        let data = response.rows[0]

        await Promise.all(
            response.rows[0].places.map(async (placeId: string, index: number) => {
                data.places[index] = await getPlaceDetails(placeId)
            })
        )
        
        return data

    } catch (error) {
        console.log(error)
    }

}

export default getPostDetails