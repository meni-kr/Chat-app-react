import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ContactsContainer } from "./cmps/contacts-container/ContactsContainer.jsx";
import { EmptyChatContainer } from "./cmps/empty-chat-container/EmptyChatContainer.jsx";
import { ChatContainer } from "./cmps/chat-container/ChatContainer.jsx";
import { logout } from "@/store/actions/user.action.js";

export function Chat() {
    const user = useSelector(storeStage => storeStage.userModule.user)
    const navigate = useNavigate()
    useEffect(() => {
        if (!user.profileSetup) {
            toast('Please set up your profile')
            navigate('/profile')
        }
    }, [user, navigate])

    async function logOut(){
        try {
            const res = await logout()
            if(res.success){
                toast.success('You have logged out successfully')
                navigate('/auth')
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="flex h-[100vh] text-white overflow-hidden">
            <ContactsContainer user={user} logOut={logOut}/>
            {/* <EmptyChatContainer/> */}
            <ChatContainer/>
        </div>
    )
}