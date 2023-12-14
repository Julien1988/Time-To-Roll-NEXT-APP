"use client";

import YouTube from "react-youtube";
import { useEffect, useState } from "react";

export async function LastVideos() {
  const channelId = process.env.NEXT_PUBLIC_YOUTUBE_CHANEL_ID;
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  const [videoIds, setVideoIds] = useState([]);

  // Fetch the video IDs from YouTube API
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&type=video&key=${apiKey}`,
    )
      .then((response) => response.json())
      .then((data) => {
        // Extract the video IDs from the

        const ids = data.items.map(
          (item: { id: { videoId: any } }) => item.id.videoId,
        );
        // Update the state with the video IDs
        setVideoIds(ids);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  }, []);

  // Options for the YouTube player
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  return (
    <div>
      {videoIds.map((id) => (
        <YouTube key={id} videoId={id} opts={opts} />
      ))}
    </div>
  );
}
