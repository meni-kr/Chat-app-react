import { userService } from "@/services/user.service.js";
import { store } from "../store.js"; 

import { SET_USER } from "../reducers/user.reducer.js"; 


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
            user:res.user
        })
        return res
    } catch (err) {
        console.error('Cannot signup', err)
        throw err
    }
}

export async function logout() {
    try {
        await userService.logout()
        store.dispatch({
            type: SET_USER,
            user: null
        })
    } catch (err) {
        console.error('Cannot logout', err)
        throw err
    }
}

export async function updatedUser(credentials){
    try {
        const res = await userService.updateUser(credentials)
        store.dispatch({
            type: SET_USER,
            user:res.user
        })
        return res
    } catch (error) {
        console.error("Cannot update the user: ",error)
    }
}
