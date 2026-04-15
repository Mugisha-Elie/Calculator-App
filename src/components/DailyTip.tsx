import type { tipProps } from "../types/tipProps"
import TipLikes from "./TipLikes"

export default function DailyTip({tip, likes}: tipProps){
    return (
        <div className='space-y-2'>
            <h2 className='text-3xl font-semibold text-slate-600'>Daily Tip 💡:</h2>
            <div className='w-60 text-slate-600' >
                    <div className='space-y-1'>
                        <p className='italic text-xl font-medium'>{tip}</p>
                        <TipLikes likes= {likes} tip={tip}/>
                    </div>
            </div>
        </div>
    )
}