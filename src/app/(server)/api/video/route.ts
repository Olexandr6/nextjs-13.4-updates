import { NextResponse } from "next/server";
import { getAllVideos } from './data';

export async function GET() {
  const videos = await getAllVideos();

  return NextResponse.json(videos);
}