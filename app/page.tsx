import ChatSection from "./components/chat-section";

export default function Home() {
  // No need for session handling anymore
  return (
    <>
      <div className="relative flex h-[100dvh] overflow-hidden">
        <ChatSection />
      </div>
    </>
  );
}
