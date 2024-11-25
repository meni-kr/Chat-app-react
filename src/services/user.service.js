import { httpService } from "./http.service.js"

const STORAGE_KEY_LOGGED_IN_USER = 'loggedInUser'
const BASE_URL = 'auth/'

export const userService = {
    login,
    logout,
    signup,
    getLoggedInUser,

}

async function signup(newUser) {
    // if (!newUser.imgUrl) newUser.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    const res = await httpService.post(BASE_URL + 'signup', newUser)
    console.log('user:', res)
    if (res.user) return _setLoggedInUser(res.user)
}

async function login(tryLogin) {
    const res = await httpService.post(BASE_URL + 'login', tryLogin)
    if (res.user) return _setLoggedInUser(res.user)
}

async function logout() {
    await httpService.post(BASE_URL + '/logout')
    sessionStorage.removeItem(STORAGE_KEY_LOGGED_IN_USER)
}

function getLoggedInUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGED_IN_USER))
}

function _setLoggedInUser(user) {
    sessionStorage.setItem(STORAGE_KEY_LOGGED_IN_USER, JSON.stringify(user))
    return user
}