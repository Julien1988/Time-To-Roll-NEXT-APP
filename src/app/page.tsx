import Playlist from "@/app/components/playList";

export default async function Home() {
  const classList: string = "p-2";
  return (
    <main className={"p-6 text-white"}>
      <h1 className={"text-2xl"}>Nos derniers AP :</h1>
      <Playlist />
    </main>
  );
}
