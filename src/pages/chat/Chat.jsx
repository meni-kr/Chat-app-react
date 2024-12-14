import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { ContactsContainer } from "./cmps/contacts-container/ContactsContainer.jsx";
import { EmptyChatContainer } from "./cmps/empty-chat-container/EmptyChatContainer.jsx";
import { ChatContainer } from "./cmps/chat-container/ChatContainer.jsx";
import { getContacts, logout } from "@/store/actions/user.action.js";
import { chatActions } from "@/store/actions/chat.action.js";

export function Chat() {
    const user = useSelector(storeStage => storeStage.userModule.user)
    const selectedChatType = useSelector(storeStage => storeStage.chatModule.selectedChatType)
    const selectedChatData = useSelector(storeStage => storeStage.chatModule.selectedChatData)

    const [searchedContacts, setSearchedContacts] = useState([])
    const navigate = useNavigate()


    useEffect(() => {
        if (!user.profileSetup) {
            toast('Please set up your profile')
            navigate('/profile')
        }
    }, [user, navigate])

    async function logOut() {
        try {
            const res = await logout(user)
            if (res.success) {
                toast.success('You have logged out successfully')
                navigate('/auth')
            }
        } catch (error) {
            console.error(error)
        }
    }

    async function searchContacts(searchTerm) {
        try {
            if (searchTerm.length > 0) {
                const res = await getContacts(searchTerm)
                if (res?.success && res?.contacts) {
                    setSearchedContacts(res.contacts)
                }
            } else {
                setSearchedContacts([])
            }
        } catch (error) {
            console.log(error);
        }
    }

    function selectNewContact(newContact) {
        chatActions.setSelectedChatType("contact")
        chatActions.setSelectedChatData(newContact)
    }

    function closeChat(){
        chatActions.closeChat()
      }

    return (
        <div className="flex h-[100vh] text-white overflow-hidden">
            <ContactsContainer
                user={user}
                logOut={logOut}
                searchContacts={searchContacts}
                searchedContacts={searchedContacts}
                selectNewContact={selectNewContact} />
            {
                selectedChatType === undefined
                    ? <EmptyChatContainer />
                    : <ChatContainer closeChat={closeChat} selectedChatData={selectedChatData} selectedChatType={selectedChatType} />
            }
        </div>
    )
}