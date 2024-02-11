"use client";

import { Video } from "@/app/(server)/api/video/data";
import { useState } from "react";

export default function VideoComponent({ video }: { video: Video }) {
  const [liked, setLiked] = useState(false);

  return (
    <>
      {video.name}{" "}
      <button
        type="button"
        onClick={() => setLiked(!liked)}
      >
        {liked ? "😍" : "Like me!"}
      </button>
    </>
  );
}
