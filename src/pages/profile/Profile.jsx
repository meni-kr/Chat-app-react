import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { colors, getColor } from "@/services/util.service"
import { IoArrowBack } from "react-icons/io5"
import { FaPlus, FaTrash } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { updatedUser } from "@/store/actions/user.action"

export function Profile() {
    const navigate = useNavigate()
    const user = useSelector(storeState => storeState.userModule.user)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [image, setImage] = useState(null)
    const [hovered, setHovered] = useState(false)
    const [selectedColor, setSelectedColor] = useState(0)

    function validateProfile() {
        if (!firstName.length) {
            toast.error("First Name is required")
            return false
        }
        if (!lastName.length) {
            toast.error("Last Name is required")
            return false
        }
        return true
    }

    async function saveChanges() {
        if (validateProfile()) {
            try {
                const res =await updatedUser({firstName,lastName,color:selectedColor})
            } catch (error) {
                console.log('Error: ' + error)
            }
        }
    }
    
    return (
        <div className="bg-[#1b1c24] h-[100vh] flex items-center justify-center flex-col gap-10">
            <div className="flex flex-col gap-10 w-[80vw] md:w-max">
                <div>
                    <IoArrowBack className="text-4xl lg:text-6xl text-white/90 cursor-pointer" />
                </div>
                <div className="grid grid-cols-2">
                    <div className="h-full w-32 md:w48 md:h-48 relative flex items-center justify-start"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                    >
                        <Avatar className="h-32 w-32 md:w-48 md:h-48 rounded-full overflow-hidden" >
                            {
                                image ? <AvatarImage src={image} alt="profile" className="object-cover w-full h-full bg-black" />
                                    : <div className={`uppercase h-32 w-32 md:h-48 md:w-48 text-5xl border-[1px] flex items-center justify-center rounded-full ${getColor(selectedColor)}`}>
                                        {
                                            firstName ? firstName.charAt(0)
                                                : user.email.charAt(0)

                                        }
                                    </div>
                            }
                        </Avatar>
                        {
                            hovered && (
                                <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full cursor-pointer">
                                    {
                                        image ? <FaTrash className="text-white text-3xl cursor-pointer" /> : <FaPlus className="text-white text-3xl cursor-pointer" />
                                    }
                                </div>
                            )
                        }
                        {/* <input type="text" /> */}
                    </div>
                    <div className="flex min-w-32 md:min-w-64 flex-col gap-5 text-white items-center justify-center">
                        <div className="w-full">
                            <Input placeholder="Email" type="email" disabled value={user.email} className="rounded-lg p-6 bg-[#2c2e3b] border-none" />
                        </div>
                        <div className="w-full">
                            <Input placeholder="Fist name" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} className="rounded-lg p-6 bg-[#2c2e3b] border-none" />
                        </div>
                        <div className="w-full">
                            <Input placeholder="Last name" type="text" value={lastName} onChange={e => setLastName(e.target.value)} className="rounded-lg p-6 bg-[#2c2e3b] border-none" />
                        </div>
                        <div className="w-full flex gap-5">
                            {
                                colors.map((color, idx) => (
                                    <div key={idx}
                                        onClick={() => setSelectedColor(idx)}
                                        className={`${color} h-8 w-8 rounded-full cursor-pointer transition-all duration-300 ${selectedColor === idx ? "outline outline-white/50 outline-2" : ""}`}>
                                    </div>))
                            }
                        </div>
                    </div>
                </div>
                <div className="w-full">
                    <Button className="h-16 w-full bg-purple-700 hover:bg-purple-900 transition-all duration-300"
                        onClick={saveChanges}
                    >Save Changes</Button>
                </div>
            </div>
        </div>
    )
}