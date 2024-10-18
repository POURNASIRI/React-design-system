import { Fragment } from "react"


//utility function
const isObject = (data)=> typeof data === 'object' && data !== null


export const Recursive = ({data}) => {

    if(!isObject(data)){
        return <li>this is not an object ({data})</li>
    }

    // convert object to aray of key value 
    const pair = Object.entries(data)

    return(
        <>
        {
            pair.map(([key,value])=>{
                return(
                    <Fragment key={key}>
                    <li>
                        {key}:
                    </li>
                    <ul>
                        <Recursive data={value}/>
                    </ul>
                    </Fragment>
                )
            })
        }
        </>
    )
}