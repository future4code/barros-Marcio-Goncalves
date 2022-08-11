import axios from "axios";
import React, { useEffect, useState } from "react";

const useRequestedata=(url)=>{
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")

    useEffect(()=>{
        setIsLoading(true)
        axios
            .get(url)
            .then((resp)=>{
                setData(resp.data.trips)
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

export default useRequestedata