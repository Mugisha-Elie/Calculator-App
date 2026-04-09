import type { ButtonProps } from "../types/ButtonProps"
import CalcButton from "./CalcButton"

export default function Calculator(){
    
    return(
        <div
        className="grid grid-cols-4 gap-px bg-[#7a7b88] w-80"
        >
            <div
            className="col-span-4 text-right text-3xl text-white px-3 py-2"
            >display</div>

            <CalcButton label="AC"/>
            <CalcButton label="+/-"/>
            <CalcButton label="%"/>
            <CalcButton label="/" color="orange"/>
            <CalcButton label="7"/>
            <CalcButton label="8"/>
            <CalcButton label="9"/>
            <CalcButton label="X" color="orange" />
            <CalcButton label="4"/>
            <CalcButton label="5"/>
            <CalcButton label="6"/>
            <CalcButton label="-" color="orange" />
            <CalcButton label="1"/>
            <CalcButton label="2"/>
            <CalcButton label="3"/>
            <CalcButton label="+" color="orange" />
            <CalcButton label="0" span={2}/>
            <CalcButton label="."/>
            <CalcButton label="=" color="orange" />


            
        </div>
    )
}