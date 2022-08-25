import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const useProtectPage = ()=>{
    const Navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("token")

        if(!token){
            Navigate('/Login')
        }
    }, [])
}