import Image from "next/image";

export default function Home() {
  const classList: string = "p-2";
  return (
    <main className={"p-6 text-white"}>
      <h1 className={"text-2xl"}>Nos derniers AP :</h1>
      <ul className={"flex flex-wrap justify-center"}>
        <li className={classList}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4fwkVpSyL3Q?si=R8qPdQWs3tULPAIO"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </li>
        <li className={classList}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4fwkVpSyL3Q?si=R8qPdQWs3tULPAIO"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </li>
        <li className={classList}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/4fwkVpSyL3Q?si=R8qPdQWs3tULPAIO"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </li>
      </ul>
    </main>
  );
}
