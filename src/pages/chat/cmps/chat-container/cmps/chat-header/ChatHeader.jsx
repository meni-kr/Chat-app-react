import { AvatarProfileInfo } from "@/cmps/AvatarProfileInfo"
import { chatActions } from "@/store/actions/chat.action"
import {RiCloseFill} from "react-icons/ri"

export function ChatHeader({closeChat,selectedChatData,selectedChatType}) {

  return (
    <div className="h-[10vh] border-b-2 border-[#2f303b] flex items-center justify-between px-20">
        <div className="flex gap-5 items-center w-full justify-between">
            <div className="flex gap-3 items-center justify-center">
              <AvatarProfileInfo user={selectedChatData}/>
              <div>
                {
                  selectedChatType==='contact' 
                  && selectedChatData.firstName 
                  ? `${selectedChatData.firstName} ${selectedChatData.lastName}`
                  : selectedChatData.email
                }
              </div>
            </div>
            <div className="flex items-center justify-center gap-5">
                <button className="text-neutral-500 focus:border-none focus:outline-none focus:text-white duration-300 transition-all"
                onClick={closeChat}
                >
                <RiCloseFill className="text-3xl"/>
                </button>
            </div>
        </div>
    </div>
  )
}

