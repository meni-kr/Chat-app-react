import { userService } from "@/services/user.service"


export const SET_USER = 'SET_USER'
export const SET_USER_FIRST_LAST_NAME = 'SET_USER_FIRST_LAST_NAME'
export const SET_USER_PROFILE_IMAGE = 'SET_USER_PROFILE_IMAGE'
export const DELETE_PROFILE_IMAGE = 'DELETE_PROFILE_IMAGE'


const initialState = {
    user: userService.getLoggedInUser() || null,
}

export function userReducer(state = initialState, action) {
    var newState = state
    switch (action.type) {

        case SET_USER:
            newState = { ...state, user: action.user }
            break
        case SET_USER_FIRST_LAST_NAME:
            newState = { ...state, user: action.user }
            break

        case SET_USER_PROFILE_IMAGE:
            newState = { ...state, user: action.user }
            break

        case DELETE_PROFILE_IMAGE:
            newState = { ...state, user: action.user }
            break

        default:
    }
    return newState
    // For debug:
    // window.userState = newState
}
