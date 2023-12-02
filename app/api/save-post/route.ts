import { sql, db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

  const client = await db.connect()

  const { searchParams } = new URL(request.url);
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
    if (!author || !authorPhoto || !title || !desc || !tags || !places) throw new Error('Missing required data.');

    await client.sql`
  INSERT INTO posts (Author, Authorphoto, Title, Description, Tags, Places)
  VALUES
  (${author}, ${authorPhoto}, ${title}, ${desc}, ${tags}, ${places})
`;
  
  
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const posts = await sql`SELECT * FROM posts;`;
  return NextResponse.json({ posts }, { status: 200 });
}