


import { useEffect, useState } from "react"


export const DataSourceWithRenderProps = ({getData =()=>{},render})=>{

   const [resourse,setresource] = useState(null)

   useEffect(()=>{
    (async ()=> {
        const data = await getData()
        setresource(data)
    })()
   },[getData])

   return(render(resourse))

}
