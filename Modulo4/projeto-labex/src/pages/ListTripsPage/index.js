import React, {useState } from "react";
import { urlGetTrips } from "../../hooks/url";
import useRequesteData from "../../hooks/useRequestData";
import { LayoutPage } from "../../style";
import { AnimLoading, ButtonListTripsCamp, EachListTrips, ListTripsCamp, ListTripsContainer, MainListTripsCamp, TittleListTripsCamp } from "./style";
import { useNavigate } from "react-router-dom";

function ListTripsPage(){
    const Navigate = useNavigate()
    const [data,isLoading, error] = useRequesteData(`${urlGetTrips}`)

    const travel = data&&data.map((trip) =>{
        return (
            <EachListTrips key={trip.id}>
                <div>
                    <label>Nome:</label>
                    <label>{trip.name}</label>
                </div>
                <div>
                    <label>Descrição:</label>
                    <label>{trip.description}</label>
                </div>
                <div>
                    <label>Planeta:</label>
                    <label>{trip.planet}</label>
                </div>
                <div>
                    <label>Tempo de viagem:</label>
                    <label>{trip.durationInDays}</label>
                </div>
                <div>
                    <label>Data:</label>
                    <label>{trip.date}</label>
                </div>
            </EachListTrips>
        )
    })
    
    return(
        <LayoutPage>
            <ListTripsContainer>
                <TittleListTripsCamp>
                    <h1>Viagens</h1>
                </TittleListTripsCamp>
                <MainListTripsCamp>
                    <ListTripsCamp>
                        {isLoading&&<AnimLoading/>}
                        {!isLoading&&data&&travel}
                        {!isLoading&&!data&error}
                    </ListTripsCamp>
                </MainListTripsCamp>
                <ButtonListTripsCamp>
                    <button onClick={()=>{Navigate("/Home")}}>voltar</button>
                    <button onClick={()=>{Navigate("/CadastrodeViagem")}}>Inscrever-se</button>
                </ButtonListTripsCamp>

            </ListTripsContainer>
        </LayoutPage>
        
    )
}

export default ListTripsPage

// {/* <p>{Name}</p> */}