import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function Chat(){
    const user = useSelector(storeStage=>storeStage.userModule.user)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!user.profileSetup){
            toast('Please set up your profile')
            navigate('/profile')
        }
    },[user,navigate])

}