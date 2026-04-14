import type { BtnProps } from "../types/BtnProps";

export default function CustomBtn({label, span = 1, color = 'light-gray', onClick}: BtnProps){
    // throw new Error("Simulated Crush")

    const colorClasses = {
        'light-gray': 'text-black bg-[#DBDBDB]',
        'orange': 'text-white bg-[#F38636]'
    }

    return (
        <button
        onClick={() => onClick(label)}
        className={`${colorClasses[color]} text-3xl font-medium p-5 col-span-${span} cursor-pointer`}
        >
            {label}
        </button>
    )
}