import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { useState } from "react"
import { FaPlus } from "react-icons/fa"
import { Input } from "@/components/ui/input"
import { animationDefaultOptions, getColor } from "@/services/util.service"
import Lottie from "react-lottie";
import { ScrollArea } from "@/components/ui/scroll-area"
import { AvatarProfileInfo } from "@/cmps/AvatarProfileInfo"


export function NewDM({ searchContacts, searchedContacts, selectNewContact }) {
    const [openNewContactModal, setOpenNewContactModal] = useState(false)

    function handleSearchContacts(val) {
        searchContacts(val)
    }

    function handleSelectNewContact(contact) {
        setOpenNewContactModal(false)
        searchContacts([])
        selectNewContact(contact)
    }
    return (
        <>
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <FaPlus className="text-neutral-400 font-light text-opacity-90 text-start hover:text-neutral-100 cursor-pointer transition-all duration-300"
                            onClick={() => setOpenNewContactModal(true)}
                        />
                    </TooltipTrigger>
                    <TooltipContent className="bg-[#1c1b1e] border-none mb-2 p-3 text-white">
                        Select New Contact
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
            <Dialog open={openNewContactModal} onOpenChange={setOpenNewContactModal}>
                <DialogContent className="bg-[#181920] border-none text-white w-[400px] h-[400px] flex flex-col">
                    <DialogHeader>
                        <DialogTitle>Please select a contact.</DialogTitle>
                        <DialogDescription></DialogDescription>
                    </DialogHeader>
                    <div>
                        <Input
                            placeholder="Search Contact"
                            className="rounded-lg p-6 bg-[#2c2e3b] border-none"
                            onChange={(e) => handleSearchContacts(e.target.value)}
                        />
                    </div>
                    {
                        searchedContacts.length > 0 &&
                        <ScrollArea className="h-[250px]">
                            <div className="flex flex-col gap-5">
                                {
                                    searchedContacts.map(contact =>
                                        <div key={contact._id}
                                            className="flex gap-3 items-center cursor-pointer"
                                            onClick={() => handleSelectNewContact(contact)}
                                        >
                                            <AvatarProfileInfo user={contact} />
                                            <div className="flex flex-col">
                                                <span>
                                                    {
                                                        contact.firstName && contact.lastName
                                                            ? `${contact.firstName} ${contact.lastName}`
                                                            : `${contact.email}`
                                                    }
                                                </span>
                                                <span className="text-xs">{contact.email}</span>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </ScrollArea>
                    }

                    {
                        searchedContacts.length <= 0 && (<div className="flex-1 md:flex mt-5 md:mt-0 flex-col justify-center items-center duration-1000 transition-all">
                            <Lottie
                                isClickToPauseDisabled={true}
                                height={100}
                                width={100}
                                options={animationDefaultOptions}
                            />
                            <div className="text-opacity-80 text-white flex flex-col gap-5 items-center mt-5 lg:text-2xl text-xl transition-all duration-300 text-center">
                                <h3 className="poppins-medium">
                                    Hi<span className="text-purple-500">!</span> Search new <span className="text-purple-500">Contact </span>
                                </h3>
                            </div>
                        </div>)
                    }
                </DialogContent>
            </Dialog>

        </>
    )
}

