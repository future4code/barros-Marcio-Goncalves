import React, { useState } from "react";
import { LayoutPage } from "../../style";
import { ButtonPainelAdmCamp, CardTravel, PainelAdmCamp, TittlePainelAdmCamp, TravelsPainelAdmCamp } from "./style";
import { useNavigate } from "react-router-dom";
import {urlGetTrips, urlGetTripsDetail } from "../../hooks/url";
import axios from "axios";
import useRequesteData from "../../hooks/useRequestData";

function AdminHomePage(){
    const Navigate = useNavigate()
    // const [data, isLoading, error] = useRequesteData(urlGetTripsDetail)

    const myHeaders = {
        headers:{
          auth : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IkdFQ…E2NX0.wJOy4crytJdGq6Lh3nNncxcmIFFai52-Wm01fYIVQ80"
        }
      }

    const ListDetail = () => {
        axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/marcio-goncalves-barros/trip/0fZl9VVAZxBR5X5eFiOG`,myHeaders )
            .then((resp)=>{
                console.log(resp.data);
            })
            .catch((err)=>{
                console.log(err.message);
            })
    }   

    // 0fZl9VVAZxBR5X5eFiOG id viagem
    return(
        <LayoutPage>
            <PainelAdmCamp>
                <TittlePainelAdmCamp>
                    <h1>Painel Administrador</h1>
                </TittlePainelAdmCamp>
                <ButtonPainelAdmCamp>
                    <button onClick={()=>{Navigate("/Login")}}>Voltar</button>
                    <button onClick={()=>{Navigate("/CriarViagem")}}>Criar Viagem</button>
                    <button>Logout</button>
                </ButtonPainelAdmCamp>
                <TravelsPainelAdmCamp>
                    <CardTravel><h1>Candidatos Pendentes</h1></CardTravel>
                    <button onClick={ListDetail}>testessss</button>
                </TravelsPainelAdmCamp>
            </PainelAdmCamp>
        </LayoutPage>
        
    )
}

export default AdminHomePage