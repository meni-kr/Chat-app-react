import { store } from "../store.js";
import { chatService } from "@/services/chat.service.js";
import {
    SET_SELECTED_CHAT_TYPE,
    SET_SELECTED_CHAT_DATA,
    SET_SELECTED_CHAT_MESSAGES,
    SET_CLOSE_CHAT
} from "../reducers/chat.reducer.js";

export const chatActions = {
    setSelectedChatType,
    setSelectedChatData,
    closeChat
}

async function setSelectedChatType(type) {
    try {
        // const res = await chatService.setSelectedChatType(type)
        store.dispatch({
            type: SET_SELECTED_CHAT_TYPE,
            chatType: type
        })
        // return res
    } catch (error) {
        console.error('Cannot set chat type', error)
    }
}

async function setSelectedChatData(data) {
    try {
        // const res = await chatService.setSelectedChatData(data)
        store.dispatch({
            type: SET_SELECTED_CHAT_DATA,
            chatData: data
        })
        // return res
    } catch (error) {
        console.error('Cannot set chat data', error)
    }
}

function closeChat(){
    store.dispatch({
        type: SET_CLOSE_CHAT
    })
}