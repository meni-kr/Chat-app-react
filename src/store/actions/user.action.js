import { userService } from "@/services/user.service.js";
import { store } from "../store.js";

import {
    SET_USER,
    SET_USER_FIRST_LAST_NAME,
    SET_USER_PROFILE_IMAGE,
    DELETE_PROFILE_IMAGE,
    LOGOUT
} from "../reducers/user.reducer.js";


export async function login(credentials) {
    try {
        const res = await userService.login(credentials)
        store.dispatch({
            type: SET_USER,
            user: res.user
        })
        return res
    } catch (err) {
        console.error('Cannot login', err)
        throw err
    }
}

export async function signup(credentials) {
    try {
        const res = await userService.signup(credentials)
        store.dispatch({
            type: SET_USER,
            user: res.user
        })
        return res
    } catch (err) {
        console.error('Cannot signup', err)
        throw err
    }
}

export async function updatedUser(credentials) {
    try {
        const res = await userService.updateUser(credentials)
        store.dispatch({
            type: SET_USER_FIRST_LAST_NAME,
            user: res.updatedUser
        })
        return res
    } catch (error) {
        console.error("Cannot update the user: ", error)
    }
}

export async function updateProfileImage(imageToUpdate) {
    try {
        const res = await userService.updateProfileImage(imageToUpdate)
        store.dispatch({
            type: SET_USER_PROFILE_IMAGE,
            user: res.updatedUser
        })
        return res
    } catch (error) {
        console.error("Cannot set profile image: ", error)
    }

}
export async function logout() {
    try {
      const res= await userService.logout()
      console.log('res:', res)
        store.dispatch({
            type: LOGOUT,
            user: null
        })
        return res
    } catch (err) {
        console.error('Cannot logout', err)
    }
}

export async function getContacts(searchTerm){
    try {
        const res = await userService.getContacts(searchTerm)
        return res
    } catch (error) {
        console.error("Cannot get contacts: ", error)
    }
}

export async function deleteProfileImage() {
    try {
        const res = await userService.deleteProfileImage()
        store.dispatch({
            type: DELETE_PROFILE_IMAGE,
            user: res.updatedUser
        })
        return res
    } catch (error) {

    }
}