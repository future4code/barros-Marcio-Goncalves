import axios from "axios";
import { useEffect, useState } from "react";

const useRequesteData=(url, headers)=>{

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [data, setData] = useState([])
    

    useEffect(()=>{
        setIsLoading(true)
        axios.get(url, headers)
            .then((resp)=>{
                setData(resp.data)
                setIsLoading(false)
            })
            .catch((err)=>{
                setIsLoading(false)
                setError(err)
            })
    },[url])
    return [data, isLoading ,error];
}

export default useRequesteData