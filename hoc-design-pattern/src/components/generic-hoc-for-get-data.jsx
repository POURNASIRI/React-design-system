import axios from "axios";
import { useEffect, useState } from "react";


const toCapital = (str) => str.charAt(0).toUpperCase() + str.slice(1);


export const genericHocForGetData = (Component, resourseUrl,resourseName) => {


    return (props) => {
        const [initialResourse,setInitialResourse] = useState(null);
        const [resource,setResource] = useState(null);

        useEffect(()=>{
            (async()=>{
                const response = await axios.get(resourseUrl);
                const data = response.data;
                setInitialResourse(data);
                setResource(data);
            })()
        },[])

        const onChange = (update)=>{
            setResource({...resource,...update});
        }

        const onPost = async ()=>{
            const response = await axios.post(resourseUrl,{
                [resourseName]:resource
            });
            setResource(response.data);
            setInitialResourse(response.data);
            
        }

        const onReset = ()=>{
            setResource(initialResourse);
        }

        // const resourceProps = {
        //     [resourseName]:resource,
        //     [`onChange${toCapital(resourseName)}`]:onChange,
        //     [`onPost${toCapital(resourseName)}`]:onPost,
        //     [`onReset${toCapital(resourseName)}`]:onReset
        // }

        // console.log(resourceProps)

        return <Component 
        {...props} 
        resource={{[resourseName]:resource}}
        onChange={onChange}
        onPost={onPost}
        onReset={onReset}
        />      
    }
}