import { emitter } from "./emitter"



const Buttons = ()=>{

    const onIncreamentCounter = () =>{
        emitter.emit("increament")
    }
    const onDecreamentCounter = () =>{
        emitter.emit("decreament")

    }
    return(
            <div>
                <button onClick={onIncreamentCounter}>Increament</button>
                <button onClick={onDecreamentCounter}>Decreament</button>
            </div>
    )
}

export default Buttons