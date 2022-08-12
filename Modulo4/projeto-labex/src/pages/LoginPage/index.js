import axios from "axios";
import React, { useState, useEffect } from "react";
import { LayoutPage } from "../../style";
import { ButtonLoginCamp, FormLoginCamp, LoginCamp, TittleLoginCamp } from "./style";
import { useNavigate } from "react-router-dom";
import { urlPostLogin } from "../../hooks/url";

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
                resp.data.success === true ? Navigate("/Admin") : alert("")
            })
            .catch((err)=>{
                  alert(err.message)
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
                        value={user}
                        onChange={(ev)=>{setUser(ev.target.value)}} 
                        type='email'
                        placeholder="Digite seu Login"
                    />
                    <input
                        value={password}
                        onChange={(ev)=>{setPassword(ev.target.value)}} 
                        type='password'
                        placeholder="Digite sua Senha"
                    />
                </FormLoginCamp>
                <ButtonLoginCamp>
                    <button onClick={()=>{Navigate("/home")}}>Voltar</button>
                    <button onClick={logar}>Logar</button>
                </ButtonLoginCamp>
            </LoginCamp>
        </LayoutPage>
        
    )
}

export default LoginPage