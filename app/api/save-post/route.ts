import savePost from '@/util/savePost';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {

  try {
    const posts = await savePost(request.url);
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.error('Error in GET route:', error);

    return NextResponse.json('Internal Server Error', { status: 500 });
  }


}