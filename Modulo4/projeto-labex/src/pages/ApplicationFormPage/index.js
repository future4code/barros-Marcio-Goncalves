import React, { useEffect, useState } from "react";
import { LayoutPage } from "../../style";
import { ButtonCamp, FormCamp, InputCamp, TittleCamp } from "./style";
import { useNavigate } from "react-router-dom";
import useRequesteData from "../../hooks/useRequestData";
import {BASE_URL, urlCountries} from "../../hooks/url";
import useForm from "../../hooks/useForm";
import axios from "axios";

function ApplicationFormPage(){
    const navigate = useNavigate("")
    const [ dataCountries ] = useRequesteData(urlCountries)
    const [ body, onChange, clear ] = useForm({trip:"",name:"",age:"",applicationText:"", profession:"", country:"",})
    const [ nameTrip, setNameTrip ]= useState("")

    useEffect(()=>{
        axios
            .get(`${BASE_URL}/trip/${localStorage.getItem("idTravel")}`,{headers:{auth:localStorage.getItem("token")}})
            .then((resp)=>{
                setNameTrip(resp.data.trip.name);
            })
    },[BASE_URL])

    const countries = dataCountries&&dataCountries.map((country, index)=>{
        return(
            <option key={index}>{country.name}</option>
        )
    })

    const sendForm = (ev)=>{
        ev.preventDefault()
        axios
            .post(`${BASE_URL}/trips/${localStorage.getItem("apllyID")}/apply`, body)
            .then((resp)=>{
                console.log(resp.data.message);
            })
            .catch((err)=>{
                console.log(err.message);
            })
    }
    return(
        <LayoutPage>
            <FormCamp>
            <TittleCamp>
                <h2>{nameTrip}</h2>
            </TittleCamp>
            <InputCamp>
                <form onSubmit={sendForm}>
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
                        name="applicationText"
                        placeholder="Apresentação para candidatura"
                        value={body.applicationText}
                        onChange={onChange} 
                        required
                        pattern="^.{30,}"
                    />
                    <input
                        name="profession"
                        placeholder="Profissão"
                        value={body.profession}
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