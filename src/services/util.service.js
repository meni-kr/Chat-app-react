import animationData from "@/assets/lottie-json"

export const colors = [
    "bg-[#712c4a57] text-[#ff006e] border-[1px] border-[#ff006faa]",
    "bg-[#ffb60a2a] text-[#ffb60a] border-[1px] border-[#ffb60abb]",
    "bg-[#06d6a02a] text-[#06d6a0] border-[1px] border-[#06d6a0bb]",
    "bg-[#4cc9f02a] text-[#4cc9f0] border-[1px] border-[#4cc9f0bb]",
]

export function getColor(color) {
    if(color >= 0 && color <colors.length){
        return colors[color]
    }
    return colors[0]
}

export const animationDefaultOptions={
    loop: true,
    autoplay: true,
    animationData
}