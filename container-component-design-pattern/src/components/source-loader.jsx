
import axios from "axios"
import React from "react";
import { useEffect, useState } from "react"


export const SourceLoader = ({url,resourceName,children})=>{

   const [resourse,setresource] = useState(null)

   useEffect(()=>{
    (async ()=> {
        const response = await axios.get(url)
        setresource(response.data)
    })()
   },[url])

   return(
    <>
        {
            React.Children.map(children,(child)=>{
                if(React.isValidElement(child)){
                    return React.cloneElement(child,{[resourceName]:resourse})
                }
                return child
            })
        }
    </>
   )

}
