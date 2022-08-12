import React from "react";
import { LayoutPage } from "../../style";
import { ButtonCamp, FormCamp, InputCamp, TittleCamp } from "./style";
import { useNavigate } from "react-router-dom";
import useRequesteData from "../../hooks/useRequestData";
import { urlCountries, urlGetTrips } from "../../hooks/url";

function ApplicationFormPage(){
    const navigate = useNavigate("")
    const [ data ] = useRequesteData(urlGetTrips)
    const [ dataCountries ] = useRequesteData(urlCountries)
    const travels = data.trips&&data.trips.map((travel)=>{
        return(
            <option>{travel.name}</option>
        )
    })

    const countries = dataCountries&&dataCountries.map((country)=>{
        return(
            <option>{country.name}</option>
        )
    })

    return(
        <LayoutPage>
            <FormCamp>
            <TittleCamp>
                <h2>Inscreva-se para uma <label>Viagem</label> </h2>
            </TittleCamp>
            <InputCamp>
                <select>
                    <option>Selecione uma viagem</option>
                    {travels}
                </select>
                <input 
                    placeholder="Nome"
                />
                <input
                    placeholder="Idade"
                />
                <input
                    placeholder="Apresentação para candidatura"
                />
                <input
                    placeholder="Profissão"
                />
                <select>
                <option>Selecione um país</option>
                    {countries}
                </select>
            </InputCamp>
            <ButtonCamp>
                <button onClick={()=>{navigate("/ListadeViagens")}}>Voltar</button>
                <button >Enviar</button>
            </ButtonCamp>
            </FormCamp>
        </LayoutPage>
        
    )
}

export default ApplicationFormPage