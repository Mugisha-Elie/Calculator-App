import {useState, useEffect} from 'react';
import { wait } from './Simulations';
import TipLikes from './TipLikes';

const tips = [
    "The best time to think about your problems is when you are cutting onions", 
    "Drink water or you will die of dehydration", 
    "Avoid everything that you feel like you want to avoid, you might be right"
]

export default function DailyTip(){
    const [tip, setTip] = useState("");
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        async function getTip(){
            setIsLoading(true)
            await wait(3000);

            const index = Math.floor(Math.random() * tips.length);
            const randomTip = tips[index];

            setTip(randomTip)
            setIsLoading(false);
        }


        getTip();
    }, [])

    return (
        <div className='space-y-2'>
            <h2 className='text-3xl font-semibold text-slate-600'>Daily Tip 💡:</h2>
            <div className='w-60 text-slate-600' >
                {isLoading 
                ? <p>Loading daily tip...</p>
                : (
                    <div className='space-y-1'>
                        <p className='italic text-xl font-medium'>{tip}</p>
                        <TipLikes />
                    </div>
                )
                }
            </div>
        </div>
    )
}