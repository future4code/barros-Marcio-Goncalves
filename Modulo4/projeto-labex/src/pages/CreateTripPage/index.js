import React, { useState } from "react";
import axios from "axios";
import { LayoutPage } from "../../style";
import { ButtonCreateTripCamp, CreateTripCamp, InputCreateTripCamp, TittleCreateTripCamp } from "./style";
import { useNavigate } from "react-router-dom";
import { urlPostCreateTrips } from "../../hooks/url";
import useForm from "../../hooks/useForm";
import Swal from "sweetalert2";
import { useProtectPage } from "../../hooks/useProtectPage";

function CreateTripPage(){
    useProtectPage()
    const Navigate = useNavigate()
    const [ body, onChange] = useForm({name:"", planet:"",date:"",description:"",durationInDays:"",})

    const sendSubscription = (ev)=>{
        ev.preventDefault()
        const myHeaders = {
            headers:{
                ContentType:"application/json",
                auth:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im93T2g5ZWo2bW50akZqNUNRMVB4IiwiZW1haWwiOiJhc3Ryb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE1ODk1NjI5MDh9.aB4dNbTCkToXB7pdzEa-tuMa-QbRQDUd93eva4-cec0"
            }
        }
        axios
            .post(urlPostCreateTrips, body, myHeaders)
            .then((resp)=>{
                console.log(resp.data);
               
            })
            .catch((err)=>{
                alert(err.message)
            })

            Swal.fire({
                icon: 'success',
                title: 'Concluido',
                text: 'Viagem criada com sucesso!',
              })    
              Navigate("/Admin")
    }
    return(
        <LayoutPage>
            <CreateTripCamp>
                <TittleCreateTripCamp>
                    <h1>Crie a Viagem</h1>
                </TittleCreateTripCamp>
                <InputCreateTripCamp>
                    <form onSubmit={sendSubscription}>
                        <input
                            name="name"
                            value={body.name}
                            onChange={onChange}
                            type='text'
                            placeholder="Titulo da Viagem"
                            required
                        />
                        <select 
                            name="planet"
                            value={body.planet}
                            onChange={onChange}
                            required
                        >
                            <option>Escolha um Planeta</option>
                            <option>Marte</option>
                            <option>Mercurio</option>
                            <option>Terra</option>
                            <option>Saturno</option>
                            <option>Netuno</option>
                            <option>Via Láctea</option>
                            <option>Lua</option>
                        </select>
                        <input
                            name="date"
                            value={body.date}
                            onChange={onChange}
                            type='date'
                            placeholder="Titulo da Viagem"
                            required
                        />
                        <input
                            name="description"
                            value={body.description}
                            onChange={onChange}
                            type='text'
                            placeholder="Descrição da Viagem"
                            required
                        />
                        <input
                            name="durationInDays"
                            value={body.durationInDays}
                            onChange={onChange}
                            type='number'
                            placeholder="Duração da Viagem(dias)"
                            required
                        />
                    <ButtonCreateTripCamp>
                        <button onClick={()=>{Navigate('/Admin')}}>Voltar</button>
                        <button>Criar Viagem</button>
                </ButtonCreateTripCamp>
                    </form>    
                </InputCreateTripCamp>
            </CreateTripCamp>
        </LayoutPage>
        
    )
}

export default CreateTripPage