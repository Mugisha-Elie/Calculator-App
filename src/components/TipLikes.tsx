import type { tipProps } from "../types/tipProps";

export default function TipLikes({likes}: tipProps){
    return(
        <div className='border border-slate-400 p-1 flex items-center w-[50%]'>
            <p>♥ {likes} likes(s)</p>
        </div>
    )
}