import {useEffect, useState} from 'react';
import { wait } from './Simulations';

const likesDB = ["120k", "2", "345"];

export default function TipLikes(){
    const [likes, setLikes] = useState("0");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getLikes(){
            setIsLoading(true);
            await wait(1000);

            const randomIndex = Math.floor(Math.random() * likesDB.length);
            setLikes(likesDB[randomIndex]);
            setIsLoading(false);
        }

        getLikes()
    }, [])
    return(
        <div className='border border-slate-400 p-1 flex items-center w-[50%]'>
            {isLoading 
            ? <p>...</p> 
            : (
                <p>♥ {likes} likes(s)</p>
            )}
        </div>
    )
}