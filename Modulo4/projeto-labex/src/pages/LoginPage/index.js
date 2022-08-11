import React, { useState } from "react";
import { LayoutPage } from "../../style";
import { ButtonLoginCamp, FormLoginCamp, LoginCamp, TittleLoginCamp } from "./style";
import { useNavigate } from "react-router-dom";
import { urlPostLogin } from "../../hooks/url";
import useRequestLogin from "../../hooks/useRequestLogin";

function LoginPage(){
    const Navigate = useNavigate()
    const [ user, setUser] = useState("")
    const [ password, setPassword] = useState("")
    const [ data,isLoading, error] = useRequestLogin(urlPostLogin, user, password)
    

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
                        type='text'
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
                    <button onClick={()=>{Navigate("/Admin")}}>Logar</button>
                </ButtonLoginCamp>
            </LoginCamp>
        </LayoutPage>
        
    )
}

export default LoginPage