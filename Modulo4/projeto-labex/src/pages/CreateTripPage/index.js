import React from "react";
import { LayoutPage } from "../../style";
import { ButtonCreateTripCamp, CreateTripCamp, InputCreateTripCamp, TittleCreateTripCamp } from "./style";
import { useNavigate } from "react-router-dom";

function CreateTripPage(){

    const Navigate = useNavigate()

    return(
        <LayoutPage>
            <CreateTripCamp>
                <TittleCreateTripCamp>
                    <h1>Crie a Viagem</h1>
                </TittleCreateTripCamp>
                <InputCreateTripCamp>
                    <input
                        type='text'
                        placeholder="Titulo da Viagem"
                    />
                    <select>
                        <option>Escolha um Planeta</option>
                        <option>Escolha um Planeta</option>
                        <option>Escolha um Planeta</option>
                        <option>Escolha um Planeta</option>
                        <option>Escolha um Planeta</option>
                    </select>
                    <input
                        type='date'
                        placeholder="Titulo da Viagem"
                    />
                    <input
                        type='text'
                        placeholder="Descrição da Viagem"
                    />
                    <input
                        type='number'
                        placeholder="Duração da Viagem(dias)"
                    />
                </InputCreateTripCamp>
                <ButtonCreateTripCamp>
                    <button onClick={()=>{Navigate('/Admin')}}>Voltar</button>
                    <button>Criar Viagem</button>
                </ButtonCreateTripCamp>
            </CreateTripCamp>
        </LayoutPage>
        
    )
}

export default CreateTripPage