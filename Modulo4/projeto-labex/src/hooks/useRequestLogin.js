import axios from "axios";
import React, { useEffect, useState } from "react";

const useRequestLogin = (url, user, password )=>{
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    const header = {
        headers:{
            "Content-Type" : "application/json"
        }
    }

    const body = {
        
            "email": "user",
            "password": "password"
        
    }

    useEffect(()=>{
        setIsLoading(true)
        axios
            .post(url, header, body)
            .then((resp)=>{
                setIsLoading(false)
            })
            .catch((err)=>{
                console.log(err.message);
                setIsLoading(false)
                setError(err)
            })
    },[url])


    return [data,isLoading,error];
}

export default useRequestLogin