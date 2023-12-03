import { db } from "@vercel/postgres";
import getPlaceDetails from "./getPlaceDetails";

const getPosts = async(row : number) => {
  
    const client = await db.connect()
  
    try {
      const response : any = await client.sql`
      SELECT *
      FROM posts
      ORDER BY id DESC
      LIMIT 50 OFFSET ${row};
      `;
  
      let newResponse: any[] = [];
      if(response.rows){
  
        await Promise.all(
          response.rows.map(async(row : any) => {
            let placeDetail = await getPlaceDetails(row.places[0])
            if(placeDetail){
              row.placePhotoURL = placeDetail.photo
            }
            newResponse.push(row)
          })
        )
        
      }
  
      return newResponse
  
    } catch (error) {
      console.log(error)
    }
  
  }


export default getPosts