import type { ButtonProps } from "../types/ButtonProps";

export default function CalcButton({label, color = 'gray', span = 1, onClick}: ButtonProps){

    const colorClasses = {
        'gray': 'bg-[#333333] text-white',
        'orange': 'bg-[#FF9F0A] text-white',
    };

    return(
        <button
        onClick={() => onClick(label)}
        style={{gridColumn: `span ${span}`}}
        className={`${colorClasses[color]} h-20 text-2xl flex justify-center items-center font-medium cursor-pointer`}
        >
            {label}
        </button>
    )
}