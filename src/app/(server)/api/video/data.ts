export interface Video {
  name: string,
  favorite: boolean,
}

export const VIDEOS: Video[] = [
  { name: "React", favorite: false },
  { name: "Next", favorite: true },
]

export function getAllVideos(): Promise<Video[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(VIDEOS)
    }, 1500);
  });
}

export async function getVideoByName(name: string): Promise<Video | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(VIDEOS.find(video => video.name === name))
    }, 1500);
  });
}