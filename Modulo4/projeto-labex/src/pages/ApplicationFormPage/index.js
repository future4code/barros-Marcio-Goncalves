import React, { useState } from "react";
import { LayoutPage } from "../../style";
import { ButtonCamp, FormCamp, InputCamp, TittleCamp } from "./style";
import { useNavigate } from "react-router-dom";
import useRequesteData from "../../hooks/useRequestData";
import { urlApplytoTrip, urlCountries, urlGetTrips, urlPostCreateTrips } from "../../hooks/url";
import axios from "axios";
import useForm from "../../hooks/useForm";
import { clear } from "@testing-library/user-event/dist/clear";

function ApplicationFormPage(){
    const navigate = useNavigate("")
    const [ data ] = useRequesteData(urlGetTrips)
    const [ dataCountries ] = useRequesteData(urlCountries)
    const [ body, onChange, clear ] = useForm({trip:"",name:"",age:"",bio:"", profession:"", country:"",})

    const travels = data.trips&&data.trips.map((travel)=>{
        return(
            <option>{travel.name}</option>
        )
    })

    const idTravel = data.trips&&data.trips.map((travel)=>{
        return travel.id
    })


    const countries = dataCountries&&dataCountries.map((country)=>{
        return(
            <option>{country.name}</option>
        )
    })

    const sendForm = (ev)=>{
        // axios
        //     .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcio-goncalves-barros/trips/0fZl9VVAZxBR5X5eFiOG/apply`, body)
        //     .then((resp)=>{
        //         console.log(resp.data.message);
        //     })
        //     .catch((err)=>{
        //         console.log(err.message);
        //     })
        ev.preventDefault()
        alert("Tudo certo")
        clear()
    }
    return(
        <LayoutPage>
            <FormCamp>
            <TittleCamp>
                <h2>Inscreva-se para uma <label>Viagem</label> </h2>
            </TittleCamp>
            <InputCamp>
                <form onSubmit={sendForm}>
                    <select
                        name="trip"
                        value={body.trip}
                        onChange={onChange}
                        required
                    >
                        {travels}
                    </select>
                    <input
                        name="name"
                        value={body.name}
                        onChange={onChange} 
                        placeholder="Nome"
                        required
                        pattern="^.{3,}"
                    />
                    <input
                        name="age"
                        type="number"
                        placeholder="Idade"
                        value={body.age}
                        onChange={onChange} 
                        required
                        pattern="^.{3,}"
                    />
                    <input
                        name="bio"
                        placeholder="Apresentação para candidatura"
                        value={body.bio}
                        onChange={onChange} 
                        required
                        pattern="^.{30,}"
                    />
                    <input
                        name="prof"
                        placeholder="Profissão"
                        value={body.prof}
                        onChange={onChange}
                        required 
                        pattern="^.{10,}"
                    />
                    <select
                        name="country"
                        value={body.country}
                        onChange={onChange}
                        required 
                    >
                        {countries}
                    </select>
                    <ButtonCamp>
                <button type="button" onClick={()=>{navigate("/ListadeViagens")}}>Voltar</button>
                <button>Enviar</button>
                    </ButtonCamp>
                </form>
            </InputCamp>            
            </FormCamp>
        </LayoutPage>
        
    )
}

export default ApplicationFormPage