import React from "react";
import { LayoutPage } from "../../style";
import { ButtonCamp, FormCamp, InputCamp, TittleCamp } from "./style";
import { useNavigate } from "react-router-dom";

function ApplicationFormPage(){
    const navigate = useNavigate("")
    return(
        <LayoutPage>
            <FormCamp>
            <TittleCamp>
                <h2>Inscreva-se para uma <label>Viagem</label> </h2>
            </TittleCamp>
            <InputCamp>
                <select>
                    <option>Escolha uma Viagem</option>
                    <option>Escolha uma Viagem</option>
                    <option>Escolha uma Viagem</option>
                    <option>Escolha uma Viagem</option>
                </select>
                <input 
                    placeholder="Nome"
                />
                <input
                    placeholder="Idade"
                />
                <input
                    placeholder="Apresentação breve para candidatura"
                />
                <input
                    placeholder="Profissão"
                />
                <select>
                    <option>Escolha um País</option>
                </select>
            </InputCamp>
            <ButtonCamp>
                <button onClick={()=>{navigate("/ListadeViagens")}}>Voltar</button>
                <button>Enviar</button>
            </ButtonCamp>
            </FormCamp>
        </LayoutPage>
        
    )
}

export default ApplicationFormPage