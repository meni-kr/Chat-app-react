import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { getColor } from "@/services/util.service";
import { useEffect } from "react";

const HOST = import.meta.env.VITE_SERVER_URL

export function AvatarProfileInfo({user}) {
    return (
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
    )
}

