async function getPlayList(): Promise<any> {
  const apiKey: string | undefined = process.env.YOUTUBE_API_KEy;
  const chanelId: string | undefined = process.env.YOUTUBE_CHANEL_ID;
  const res: Response = await fetch(
    " https://youtube.googleapis.com/youtube/v3/channelSections?part=snippet%2CcontentDetails&channelId=" +
      chanelId +
      "&key=" +
      apiKey,
  );
  if (!res.ok) {
    throw new Error("Could not fetch data");
  }
  return res.json();
}
const PlaylistItems = async (props) => {
  const title = props.data.snippet.title;
  return (
    <li className={"p-2"} key={props.data.id}>
      {title}
    </li>
  );
};

export default async function Playlist() {
  const playLists = await getPlayList();
  return (
    <ul className={"flex flex-wrap justify-center flex-col"}>
      {playLists.items.map((data) => (
        <PlaylistItems data={data} />
      ))}
    </ul>
  );
}
