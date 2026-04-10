import type { BtnProps } from "../types/BtnProps"

export default function CustomBtn({label, color="light-gray", span = 1, onClick}: BtnProps){
    const colorClasses = {
        'light-gray': 'bg-[#DBDBDB] text-black',
        'orange': 'bg-[#F38636] text-white'
    }

    return (
        <button
        onClick={() => onClick ? onClick(label) : ""}
        className={`${colorClasses[color]} col-span-${span} h-20 text-2xl font-medium flex justify-center items-center cursor-pointer`}
        >
            {label}
        </button>
    )
}