import { LastVideos } from "@/app/components/lastVideos";

export default async function Home() {
  return (
    <main className={"p-6 text-white"}>
      <div>
        <h1 className={"text-2xl"}>Nos derniers AP :</h1>
        <ul>
          <LastVideos />
        </ul>
      </div>
    </main>
  );
}
