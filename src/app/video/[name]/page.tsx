import { Video, getVideoByName } from "@/app/(server)/api/video/data";
import VideoComponent from "./video";

type PageProps = {
  params: { name: string };
};

export default async function VideoPage({ params }: PageProps) {
  const videoName = params.name;
  const video = await getVideoByName(videoName);
  console.log({
    video,
    videoName,
  });

  return <>{video ? <VideoComponent video={video} /> : "Video not found"}</>;
}
