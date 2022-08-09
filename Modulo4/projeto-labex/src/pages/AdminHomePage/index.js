import React from "react";
import { LayoutPage } from "../../style";
import { ButtonPainelAdmCamp, CardTravel, PainelAdmCamp, TittlePainelAdmCamp, TravelsPainelAdmCamp } from "./style";

function AdminHomePage(){
    return(
        <LayoutPage>
            <PainelAdmCamp>
                <TittlePainelAdmCamp>
                    <h1>Painel Administrador</h1>
                </TittlePainelAdmCamp>
                <ButtonPainelAdmCamp>
                    <button>Voltar</button>
                    <button>Criar Viagem</button>
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