import { db, sql } from "@vercel/postgres";

const savePost = async (url: string) => {

    const client = await db.connect()

    const { searchParams } = new URL(url);
    const author = searchParams.get('author');
    const authorPhoto = searchParams.get('authorPhoto');
    const title = searchParams.get('title');
    const desc = searchParams.get('desc');
    const encodedTags = searchParams.get('tags');
    const encodedPlaces = searchParams.get('places');

    const decodedTags = decodeURIComponent(encodedTags as string);
    const decodedPlaces = decodeURIComponent(encodedPlaces as string);
    const tags = JSON.parse(decodedTags)
    const places = JSON.parse(decodedPlaces)

    try {
        if (!author || !authorPhoto || !title || !desc || !tags || !places) {
            throw new Error('Missing required data.');
        }

        await client.sql`
      INSERT INTO posts (Author, Authorphoto, Title, Description, Tags, Places)
      VALUES (${author}, ${authorPhoto}, ${title}, ${desc}, ${tags}, ${places})`;

        const posts = await sql`SELECT * FROM posts;`;
        return posts;
    } catch (error : unknown) {
        if(typeof(error) === 'string')
        throw new Error(error);
    }

}

export default savePost