import ChatBox from "../components/ChatBox";

export default function Home() {
  return (
    <div className="h-[90vh] w-full flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold">Homepage</h1>
      <ChatBox />
    </div>
  );
}
