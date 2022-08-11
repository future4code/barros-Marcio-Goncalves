import React from "react";
import { LayoutPage } from "../../style";
import { ButtonPainelAdmCamp, CardTravel, PainelAdmCamp, TittlePainelAdmCamp, TravelsPainelAdmCamp } from "./style";
import { useNavigate } from "react-router-dom";

function AdminHomePage(){

    const Navigate = useNavigate()

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
                </TravelsPainelAdmCamp>
            </PainelAdmCamp>
        </LayoutPage>
        
    )
}

export default AdminHomePage