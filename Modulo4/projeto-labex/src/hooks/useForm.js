import { useState } from "react"

const useForm = (init)=>{
    const [ form, setForm ] = useState(init)

    const onChange = (ev)=>{
        const {name, value} = ev.target
        setForm({...form,[name]:value})
    }
    const clear = ("")

    return [form, onChange, clear]
}

export default useForm