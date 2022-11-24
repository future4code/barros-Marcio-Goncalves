import axios from 'axios'

export const getAddressInfo =  (cep:string)=>{
    const resp =  axios.get(`https://viacep.com.br/ws/${cep}/json/`)
    console.log(resp);
    return resp
}    