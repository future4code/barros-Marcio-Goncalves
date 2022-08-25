import React from "react";
import { BASE_URL } from "../../hooks/url";
import useRequesteData from "../../hooks/useRequestData";
import { LayoutPage } from "../../style";
import { AnimLoading, ButtonListTripsCamp, EachListTrips, EachListTripsBtn, EachListTripsText, ListTripsCamp, ListTripsContainer, MainListTripsCamp, TittleListTripsCamp } from "./style";
import { useNavigate } from "react-router-dom";
import Send from '../../IMG/send.png'

function ListTripsPage(){
    const Navigate = useNavigate()
    const [data, isLoading, error] = useRequesteData(`${BASE_URL}/trips`) 

    const signUpTrip = (idTrip, nameTrip)=>{
        localStorage.setItem("idTravel", idTrip)
        localStorage.setItem("nameTravel", nameTrip)
        localStorage.setItem("apllyID", idTrip)
        Navigate("/CadastroDeViagem")
    }

    const travels = data.trips&&data.trips.map((trip) =>{
        return (
            <EachListTrips key={trip.id}>
                <EachListTripsText>
                    <div>
                        <p>{trip.name}</p>
                    </div>
                    <div>
                        <p>{trip.description}</p>
                    </div>
                    <div>
                        <p>{trip.planet}</p>
                    </div>
                    <div>
                        <p>{trip.durationInDays}</p>
                    </div>
                    <div>
                        <p>{trip.date}</p>
                    </div>
                </EachListTripsText>
                <EachListTripsBtn>
                    <div>
                        <img onClick={()=>{signUpTrip(trip.id, trip.name)}} src={Send}/>
                    </div>
                </EachListTripsBtn>
            </EachListTrips>
        )
    })
    
    return(
        <LayoutPage>
            <ListTripsContainer>
                <TittleListTripsCamp>
                    <h1>Viagens</h1>
                </TittleListTripsCamp>
                <ButtonListTripsCamp>
                    <button onClick={()=>{Navigate("/Home")}}>voltar</button>
                </ButtonListTripsCamp>
                <MainListTripsCamp>
                    <ListTripsCamp>
                        {isLoading&&<AnimLoading/>}
                        {!isLoading&&data&&travels}
                        {!isLoading&&!data&&error}
                    </ListTripsCamp>
                </MainListTripsCamp>
            </ListTripsContainer>
        </LayoutPage>
        
    )
}

export default ListTripsPage
