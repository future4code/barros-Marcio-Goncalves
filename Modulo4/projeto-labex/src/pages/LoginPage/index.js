import axios from "axios";
import React, { useState } from "react";
import { LayoutPage } from "../../style";
import { ButtonLoginCamp, FormLoginCamp, LoginCamp, TittleLoginCamp } from "./style";
import { useNavigate } from "react-router-dom";
import { urlPostLogin } from "../../hooks/url";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

function LoginPage(){
    const Navigate = useNavigate()
    const [ user, setUser] = useState("")
    const [ password, setPassword] = useState("")

    const logar = ()=>{
        const body = {
            email: user,
            password: password
        }
        axios
            .post(urlPostLogin,body)
            .then((resp)=>{
                localStorage.setItem("token", resp.data.token)
                Navigate("/Admin")
                toast.success("Logado com Sucesso")
            })
            .catch((err)=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: err.response.data.message,
                  })
        })
    }
    
     return(
        <LayoutPage>
            <LoginCamp>
                <TittleLoginCamp>
                    <h1>Faça seu login </h1>
                </TittleLoginCamp>
                <FormLoginCamp>
                    <input
                        required
                        value={user}
                        onChange={(ev)=>{setUser(ev.target.value)}} 
                        type='email'
                        placeholder="Digite seu Login"
                        pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    />
                    <input
                        required
                        value={password}
                        onChange={(ev)=>{setPassword(ev.target.value)}} 
                        type='password'
                        placeholder="Digite sua Senha"
                        pattern="^.{3,}"
                    />
                </FormLoginCamp>
                <ButtonLoginCamp>
                    <button onClick={()=>{Navigate("/home")}}>Voltar</button>
                    <button onClick={logar}>Logar</button>
                </ButtonLoginCamp>
            </LoginCamp>
            <ToastContainer />
        </LayoutPage>
        
    )
}

export default LoginPage