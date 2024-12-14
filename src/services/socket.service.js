import io from 'socket.io-client'
import { userService } from './user.service'

const SOCKET_EMIT_LOGIN = 'set-user-socket'
const SOCKET_EMIT_LOGOUT = 'unset-user-socket'

const baseUrl = (process.env.NODE_ENV === 'production') ? '' : '//localhost:3030'
export const socketService = createSocketService()

socketService.setup()

function createSocketService() {
    var socket = null
    
    const socketService = {
        setup() {
            socket = io(baseUrl)
            const user = userService.getLoggedInUser()
            if(user) this.login(user._id)
            
        },
        login(userId) {
            socket.emit(SOCKET_EMIT_LOGIN, userId)
        },
        logout(userId) {
            socket.emit(SOCKET_EMIT_LOGOUT,userId)
        }
    }
    return socketService
}