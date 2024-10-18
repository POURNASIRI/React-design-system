import { useEffect, useState } from "react";


export const useDataSource = (getData) => {

    const [source, setSource] = useState(null);

    useEffect(()=>{
        (async()=>{
            const data = await getData();
            setSource(data);
        })()
    },[getData])

    return source;

}