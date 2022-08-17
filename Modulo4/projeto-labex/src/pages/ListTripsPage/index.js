import React, {useState } from "react";
import { urlGetTrips } from "../../hooks/url";
import useRequesteData from "../../hooks/useRequestData";
import { LayoutPage } from "../../style";
import { AnimLoading, ButtonListTripsCamp, EachListTrips, ListTripsCamp, ListTripsContainer, MainListTripsCamp, TittleListTripsCamp } from "./style";
import { useNavigate } from "react-router-dom";

function ListTripsPage(){
    const Navigate = useNavigate()
    const [data, isLoading, error] = useRequesteData(`${urlGetTrips}`)

    const travels = data.trips&&data.trips.map((trip) =>{
        return (
            <EachListTrips key={trip.id}>
                <div>
                    <label>Nome:</label>
                    <p>{trip.name}</p>
                </div>
                <div>
                    <label>Descrição:</label>
                    <p>{trip.description}</p>
                </div>
                <div>
                    <label>Planeta:</label>
                    <p>{trip.planet}</p>
                </div>
                <div>
                    <label>Tempo de viagem:</label>
                    <p>{trip.durationInDays}</p>
                </div>
                <div>
                    <label>Data:</label>
                    <p>{trip.date}</p>
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
                        {!isLoading&&data&&travels}
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
