

export const SET_SELECTED_CHAT_TYPE = 'SET_SELECTED_CHAT_TYPE'
export const SET_SELECTED_CHAT_DATA = 'SET_SELECTED_CHAT_DATA'
export const SET_SELECTED_CHAT_MESSAGES = 'SET_SELECTED_CHAT_MESSAGES'
export const SET_CLOSE_CHAT = 'SET_CLOSE_CHAT'

const initialState = {
    selectedChatType: undefined,
    selectedChatData: undefined,
    selectedChatMessages: [],
}

export function chatReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {

        case SET_SELECTED_CHAT_TYPE:
            newState = { ...state, selectedChatType: action.chatType }
            break
        case SET_SELECTED_CHAT_DATA:
            newState = { ...state, selectedChatData: action.chatData }
            break
        case SET_SELECTED_CHAT_MESSAGES:
            newState = { ...state, selectedChatMessages: action.chatMessages }
            break

        case SET_CLOSE_CHAT:
            newState = {
                ...state,
                selectedChatType: undefined,
                selectedChatData: undefined,
                selectedChatMessages: []
            }
            break

        default:
    }
    return newState
    // For debug:
    // window.userState = newState
}