import axios from "axios"
import { useEffect, useState } from "react"


export const updateDataWithHoc = (Component,userId)=>{
    return(props)=>{
        // this state for keeping the users info that get from server
        const[initialUser,setInitialUser] = useState(null)

        // this state for updating the user info
        const [user,setUser] = useState(null)

        // for fetching data from server
        useEffect(()=>{
            (async()=>{
                const response = await axios.get(`/users/${userId}`)
                setInitialUser(response.data)
                setUser(response.data)
            })()
        },[])

        // for updating the user
        const onchangeUser = (updateUser)=>{
            setUser({...user,...updateUser})
        }

        // for posting the user
        const onPostUser = async ()=>{
            const response = await axios.post(`/users/${userId}`,user)
            setInitialUser(response.data)
            setUser(response.data)
        }

        return <Component {...props} user={user} onchangeUser={onchangeUser} onPostUser={onPostUser}  />
    }
}