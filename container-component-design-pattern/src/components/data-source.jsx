

import React from "react";
import { useEffect, useState } from "react"


export const DataSource = ({getData =()=>{},resourceName,children})=>{

   const [resourse,setresource] = useState(null)

   useEffect(()=>{
    (async ()=> {
        const data = await getData()
        setresource(data)
    })()
   },[getData])

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
