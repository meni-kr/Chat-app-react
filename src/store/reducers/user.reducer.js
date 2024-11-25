import { userService } from "@/services/user.service"


export const SET_USER = 'SET_USER'


const initialState = {
    user: userService.getLoggedInUser() || null,
}

export function userReducer(state = initialState, action) {
    console.log('action:', action)
    var newState = state
    switch (action.type) {

        case SET_USER:
            newState = { ...state, user: action.user }

        default:
            return newState
    }
    // For debug:
    // window.userState = newState
}
