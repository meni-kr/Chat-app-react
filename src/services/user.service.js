import { httpService } from "./http.service.js"

const STORAGE_KEY_LOGGED_IN_USER = 'loggedInUser'
const BASE_URL = 'auth/'
const USER_URL = 'user/'

export const userService = {
    login,
    logout,
    signup,
    getLoggedInUser,
    updateUser
}

async function signup(newUser) {
    // if (!newUser.imgUrl) newUser.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    const res = await httpService.post(BASE_URL + 'signup', newUser)
    console.log('user:', res)
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

async function logout() {
    await httpService.post(BASE_URL + '/logout')
    sessionStorage.removeItem(STORAGE_KEY_LOGGED_IN_USER)
}

async function updateUser(userToUpdate) {
    const res = await httpService.put(USER_URL +`/updateUser`, userToUpdate)
    if (res.user) {
        _setLoggedInUser(res.user)
        return res
    }
}

function getLoggedInUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGED_IN_USER))
}

function _setLoggedInUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGED_IN_USER, JSON.stringify(user))
}