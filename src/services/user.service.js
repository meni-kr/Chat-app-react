import {httpService} from "./http.service.js"

const BASE_URL = 'auth/'

export async function signup(newUser) {
    // if (!newUser.imgUrl) newUser.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    const user = await httpService.post(BASE_URL + 'signup', newUser )
    console.log('user:', user)
    return user
    // if (user) return _setLoggedinUser(user)

}