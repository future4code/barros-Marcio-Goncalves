import React from "react";
import { LayoutPage } from "../../style";
import { ButtonCreateTripCamp, CreateTripCamp, InputCreateTripCamp, TittleCreateTripCamp } from "./style";

function CreateTripPage(){
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
                    <button>Voltar</button>
                    <button>Criar Viagem</button>
                </ButtonCreateTripCamp>
            </CreateTripCamp>
        </LayoutPage>
        
    )
}

export default CreateTripPage