import { useEffect, useState } from "react";
import axios from "axios";

export const useResourse = (url) => {

    const [resourse, setResourse] = useState(null);
    

    useEffect(()=>{
        (async()=>{
            const response = await axios.get(url);
            setResourse(response.data);
        })()
    },[url])

    return resourse;

}