import React from "react";
import { LayoutPage } from "../../style";
import { ButtonLoginCamp, FormLoginCamp, LoginCamp, TittleLoginCamp } from "./style";

function LoginPage(){
    return(
        <LayoutPage>
            <LoginCamp>
                <TittleLoginCamp>
                    <h1>Faça seu login </h1>
                </TittleLoginCamp>
                <FormLoginCamp>
                    <input 
                        type='text'
                        placeholder="Digite seu Login"
                    />
                    <input
                        type='password'
                        placeholder="Digite sua Senha"
                    />
                </FormLoginCamp>
                <ButtonLoginCamp>
                    <button>Voltar</button>
                    <button>Logar</button>
                </ButtonLoginCamp>
            </LoginCamp>
        </LayoutPage>
        
    )
}

export default LoginPage