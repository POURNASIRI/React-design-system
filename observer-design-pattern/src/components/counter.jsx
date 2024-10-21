import { useEffect, useState } from "react";
import { emitter } from "./emitter";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        const onIncrement = () => {
            setCount((count)=> count + 1)
        }
        const onDecrement = () => {
            setCount((count)=> count - 1)
        }
        emitter.on("increament", onIncrement)
        emitter.on("decreament", onDecrement)

        //clean up
        return ()=>{
            emitter.off("increament", onIncrement)
            emitter.off("decreament", onDecrement)
        }
    },[])
    return(
        <>#{count}</>
    )
}

export default Counter