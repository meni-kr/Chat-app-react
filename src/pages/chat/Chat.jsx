import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ContactsContainer } from "./cmps/contacts-container/ContactsContainer.jsx";
import { EmptyChatContainer } from "./cmps/empty-chat-container/EmptyChatContainer.jsx";
import { ChatContainer } from "./cmps/chat-container/ChatContainer.jsx";

export function Chat() {
    const user = useSelector(storeStage => storeStage.userModule.user)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user.profileSetup) {
            toast('Please set up your profile')
            navigate('/profile')
        }
    }, [user, navigate])

    return (
        <div className="flex h-[100vh] text-white overflow-hidden">
            <ContactsContainer/>
            {/* <EmptyChatContainer/> */}
            <ChatContainer/>
        </div>
    )
}