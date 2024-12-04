import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getColor } from "@/services/util.service";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { FiEdit2 } from "react-icons/fi"
import { IoPowerSharp } from "react-icons/io5"

const HOST = import.meta.env.VITE_SERVER_URL

export function ProfileInfo({user,logOut}) {
    const navigate = useNavigate()

    function handleLogout(){
        logOut()
    }

    return (
        <div className="absolute bottom-0 h-16 flex items-center justify-between px-10 w-full bg-[#2a2b33]">
            <div className="flex gap-3 items-center justify-center">
                <div className="w-12 h-12 relative">
                    <Avatar className="h-12 w-12 rounded-full overflow-hidden" >
                        {
                            user.profileImage ? <AvatarImage src={`${HOST}/${user.profileImage}`} alt="profile image" className="object-cover w-full h-full bg-black" />
                                : <div className={`uppercase h-12 w-12 text-lg border-[1px] flex items-center justify-center rounded-full ${getColor(user.color)}`}>
                                    {
                                        (user.firstName && user.lastName) ? user.firstName.charAt(0) + user.lastName.charAt(0)
                                            : user.email.charAt(0)

                                    }
                                </div>
                        }
                    </Avatar>
                </div>
                <div>
                    {
                        user.firstName && user.lastName
                            ? `${user.firstName} ${user.lastName}`
                            : ""
                    }
                </div>
            </div>
            <div className="flex gap-5">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <FiEdit2 className="text-purple-500 text-xl font-medium"
                                onClick={() => navigate('/profile')}
                            />
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#1c1b1e] border-none text-white">
                            <p>Edit Profile</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <IoPowerSharp className="text-red-500 text-xl font-medium"
                                onClick={handleLogout}
                            />
                        </TooltipTrigger>
                        <TooltipContent className="bg-[#1c1b1e] border-none text-red-300">
                            <p>Logout</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        </div>
    )
}

