import React, { useEffect, useState } from "react";
import { LayoutPage } from "../../style";
import { ButtonPainelAdmCamp, CardTravel, EachTrip, PainelAdmCamp, TittlePainelAdmCamp, TravelsPainelAdmCamp } from "./style";
import { useNavigate } from "react-router-dom";
import useRequesteData from "../../hooks/useRequestData";
import { useProtectPage } from "../../hooks/useProtectPage";
import { BASE_URL} from "../../hooks/url";
import { AnimLoading } from "../ListTripsPage/style";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";
import ImgDel from "../../IMG/delete.png"
import ImgList from "../../IMG/list.png"
import ImgGif from "../../IMG/universo.gif"

function AdminHomePage(){
    useProtectPage();
    const Navigate = useNavigate()
    const [ data, isLoading, error ] = useRequesteData(`${BASE_URL}/trips`)
    const [ cont, setCont ] = useState(0)

    useEffect(()=>{
        axios
            .get(`${BASE_URL}/trips`)
            .then((resp)=>{
                setCont(resp.data.trips.length)
            })
            .catch((err)=>{
                alert(err.message)
            })
    },[BASE_URL])

    const detailTrip = (idTrip) => {
        Navigate("/DetalhesDaViagem")
        localStorage.setItem("idTrip", idTrip)
    }

    const deleteTrip = (idTrip)=>{
        Swal.fire({
            title: 'Deletar Viagem?',
            text: "Deseja realmente deletar essa viagem?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, Deletar Viagem!'
          }).then((result) => {
            if (result.isConfirmed) {
                axios
                    .delete(`${BASE_URL}/trips/${idTrip}`,
                    {headers:{
                        auth: localStorage.getItem("token")
                    }})
                    .then((resp)=>{
                        alert(resp.data);
                    })
                    .catch((err)=>{
                        alert(err)
                    })
              Swal.fire(
                'Excluido!',
                'A viagem foi excluida com sucesso.',
                'success'
              )
            }
          })
    }

    const travels = data.trips&&data.trips.map((trip) =>{
        return (
            <EachTrip key={trip.id}>
                    <div>
                        <p onClick={()=>{detailTrip(trip.id)}}>{trip.name}</p>
                    </div>
                    <img src={ImgDel} onClick={()=>{deleteTrip(trip.id)}}/>
            </EachTrip>
        )
    })

    const logout = ()=>{
        Swal.fire({
            title: 'Logout!!',
            text: "Deseja realmente fazer logout",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, Realizar o logout!'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("token")
                Navigate("/Login")
            }
          })
    }
    
    return(
        <LayoutPage>
            <PainelAdmCamp>
                <TittlePainelAdmCamp>
                    <h1>Painel Administrador</h1>
                </TittlePainelAdmCamp>
                <ButtonPainelAdmCamp>
                    <button onClick={logout}>Logout</button>
                    <button onClick={()=>{Navigate("/CriarViagem")}}>Criar Viagem</button>
                </ButtonPainelAdmCamp>
                <CardTravel><h4> {cont} viagens para análise!</h4></CardTravel>
                <TravelsPainelAdmCamp>
                    {isLoading&&<AnimLoading/>}
                    {!isLoading&&data&&travels}
                    {!isLoading&&!data&&error}
                </TravelsPainelAdmCamp>
            </PainelAdmCamp>
            <ToastContainer />
        </LayoutPage>
        
    )
}

export default AdminHomePage