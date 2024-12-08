import { ChatHeader } from "./cmps/chat-header/ChatHeader.jsx";
import { MessageBar } from "./cmps/message-bar/MessageBar.jsx";
import { MessageContainer } from "./cmps/message-container/MessageContainer.jsx";


export function ChatContainer({closeChat,selectedChatData,selectedChatType}) {
  return (
    <div className="fixed top-0 h-[100vh] w-[100vw] bg-[#1c1b25] flex flex-col md:static md:flex-1">
        <ChatHeader closeChat={closeChat} selectedChatData={selectedChatData} selectedChatType={selectedChatType}/>
        <MessageContainer/>
        <MessageBar/>
    </div>
  )
}

