import { httpService } from "./http.service.js"

const STORAGE_KEY_LOGGED_IN_USER = 'loggedInUser'
const BASE_URL = 'auth/'
const USER_URL = 'user/'

export const userService = {
    login,
    logout,
    signup,
    getLoggedInUser,
    updateUser,
    updateProfileImage,
    deleteProfileImage,
    getContacts
}

async function signup(newUser) {
    const res = await httpService.post(BASE_URL + 'signup', newUser)
    if (res.user) {
        _setLoggedInUser(res.user)
        return res
    }
}

async function login(tryLogin) {
    const res = await httpService.post(BASE_URL + 'login', tryLogin)
    if (res.user) {
        _setLoggedInUser(res.user)
        return res
    }
}

async function updateUser(userToUpdate) {
    const res = await httpService.put(USER_URL + `updateUser`, userToUpdate)
    if (res.updatedUser) {
        _setLoggedInUser(res.updatedUser)
        return res
    }
}

async function updateProfileImage(imageToUpdate) {
    const res = await httpService.put(USER_URL + `updateProfileImage`, imageToUpdate)
    if (res.updatedUser) {
        _setLoggedInUser(res.updatedUser)
        return res
    }
}

async function deleteProfileImage() {
    const res = await httpService.delete(USER_URL + `removeProfileImage`)
    if (res.updatedUser) {
        _setLoggedInUser(res.updatedUser)
        return res
    }
}

async function logout() {
    const res = await httpService.post(BASE_URL + 'logout')
    if (res.success) {
        sessionStorage.removeItem(STORAGE_KEY_LOGGED_IN_USER)
        return res
    }
}

async function getContacts(term){
    try {
        console.log('searchTerm:', term)
        const res = await httpService.get(`${USER_URL}getContacts/${term}`)
        console.log('res:', res)
        if (res.success) {
            return res            
        }
    } catch (error) {
        
    }
}

function getLoggedInUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGED_IN_USER))
}

function _setLoggedInUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGED_IN_USER, JSON.stringify(user))
}