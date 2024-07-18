import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // @ts-ignore server component
    <Sidebar>
      <div className="h-full">
        <ConversationList initialItem={[]} />
        {children}
      </div>
    </Sidebar>
  );
}
