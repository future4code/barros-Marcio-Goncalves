import axios from "axios";
import React, { useEffect, useState } from "react";

const useRequesteData=(url)=>{
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(()=>{
        setIsLoading(true)
        axios
            .get(url)
            .then((resp)=>{
                setData(resp.data)
                setIsLoading(false)
            })
            .catch((err)=>{
                setIsLoading(false)
                setError(err)
            })
    },[])


    return [data,isLoading,error];
}

export default useRequesteData