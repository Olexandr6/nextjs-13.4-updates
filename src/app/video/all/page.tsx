import { Video, getAllVideos } from "@/app/(server)/api/video/data";

export default async function AllPage() {
  const allVideos = await getAllVideos();

  return (
    <>
      <h2>All videos</h2>

      <ul>
        {allVideos.map((video, index) => (
          <li key={index}>{video.name}</li>
        ))}
      </ul>
    </>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import { Video } from "@/app/(server)/api/video/data";

// export default function AllPage() {
//   const [allVideos, setAllVideos] = useState<Video[]>([]);

//   useEffect(() => {
//     fetch("/api/video")
//       .then((response) => response.json())
//       .then(setAllVideos);
//   }, []);

//   return (
//     <>
//       <h2>All videos</h2>

//       <ul>
//         {allVideos.map((video, index) => (
//           <li key={index}>{video.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }
