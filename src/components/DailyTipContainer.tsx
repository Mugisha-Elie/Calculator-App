import DailyTip from "./DailyTip"
import { wait, wrapPromise } from "./Simulations"

const tips = [
    "The best time to think about your problems is when you are cutting onions", 
    "Drink water or you will die of dehydration", 
    "Avoid everything that you feel like you want to avoid, you might be right"
]

const likesDB = ["120k", "2", "345"];

const tipResource = wrapPromise(wait(2000).then(() => {
    const index = Math.floor(Math.random() * tips.length);
    return tips[index];
} ))

const likeResources = wrapPromise(wait(2000).then(() => {
    const randomIndex = Math.floor(Math.random() * likesDB.length);
    return likesDB[randomIndex];
}))

export default function DailyTipContainer(){
    return(
        <>
            <DailyTip tip={tipResource.read()} likes={likeResources.read()}/>
        </>
    )
}