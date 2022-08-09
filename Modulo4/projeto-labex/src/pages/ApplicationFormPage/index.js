import React from "react";
import { LayoutPage } from "../../style";
import { ButtonCamp, FormCamp, InputCamp, TittleCamp } from "./style";

function ApplicationFormPage(){
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
                <button>Voltar</button>
                <button>Enviar</button>
            </ButtonCamp>
            </FormCamp>
        </LayoutPage>
        
    )
}

export default ApplicationFormPage