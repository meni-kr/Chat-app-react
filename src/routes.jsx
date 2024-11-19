import { Navigate } from "react-router-dom";
import { Auth } from "./pages/auth/Auth";
import { Chat } from "./pages/chat/Chat";
import { Profile } from "./pages/profile/Profile";



export const routes = [
    {
        path:'/auth',
        component:<Auth/>,
        label:'Auth'
    },
    {
        path:'/chat',
        component:<Chat/>,
        label:'Chat'
    },
    {
        path:'/profile',
        component:<Profile/>,
        label:'Profile'
    },
    {
        path:'*',
        component:<Navigate to="/auth"/>,
        label:'Profile'
    },
]

