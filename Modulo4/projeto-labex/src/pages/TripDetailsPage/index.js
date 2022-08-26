import React, { useEffect, useState } from "react";
import { LayoutPage } from "../../style";
import { ButtonEachDetail, ButtonListDetail, DetailTripCamp, EachDetailCamp, EachDetailTrip, ListDetailCamp, MainListDetail, TittleListDetail, CandidatesCamp, EachCandidate, Render } from "./style";
import { useProtectPage } from "../../hooks/useProtectPage";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../hooks/url";
import axios from "axios";
import { AnimLoading } from "../ListTripsPage/style";
import Swal from "sweetalert2";

function TripDetailsPage(){
    useProtectPage()
    const Navigate = useNavigate()
    const [ isLoading, setIsLoading] = useState(false)
    const [ error, setError] = useState("")
    const [ render, setRender] = useState([])
    const [ nameTrip, setNameTrip] = useState("")
    
    useEffect(()=>{
        setIsLoading(true)
        axios
            .get(`${BASE_URL}/trip/${localStorage.getItem("idTrip")}`,
            {headers:{
                auth:localStorage.getItem("token")
            }})
            .then((resp)=>{
                setRender(resp.data.trip)
                setIsLoading(false)
                setNameTrip(resp.data.trip.name)
            })
            .catch((err)=>{
                console.log(err.message);
                setIsLoading(false)
                setError(err)
            })
    },[BASE_URL])

    const myHeader = {headers:{
        auth:localStorage.getItem("token"),
        "Content-Type" : "application/json"
    }}

    const myBody = {
        "approve": true
    }

    const decideCandidate = (idcandidate)=>{
        axios.put(`${BASE_URL}/trips/${localStorage.getItem("idTrip")}/candidates/${idcandidate}/decide`, myBody, myHeader)
            .then((resp)=>{
                Swal.fire({
                    icon: 'success',
                    title: resp.data.message,
                    text: 'O candidato foi adicionado à viagem',
                  })  
            })
            .catch((err)=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Request',
                    text: err.message,
                  })  
            })
    }

    const bodyReject = {
        "approve": false
    }

    const rejectCandidate = (idcandidate)=>{
        axios.put(`${BASE_URL}/trips/${localStorage.getItem("idTrip")}/candidates/${idcandidate}/decide`, bodyReject, myHeader)
            .then((resp)=>{
                Swal.fire({
                    icon: 'success',
                    title: resp.data.message,
                    text: 'O candidato foi rejeitado com sucesso',
                  })  
            })
            .catch((err)=>{
                Swal.fire({
                    icon: 'error',
                    title: 'Request',
                    text: err.message,
                  })  
            })
    }

    const detailTrip = render.candidates&& render.candidates.map((detail, index)=>{
        return (
            <EachDetailTrip key={index}>
                <EachDetailCamp>
                    <table>
                        <tbody>
                            <tr>
                                <th>Nome</th>
                                <td>{detail.name}</td>
                            </tr>
                            <tr>
                                <th>Idade</th>
                                <td>{detail.age}</td>
                            </tr>
                            <tr>
                                <th>Profissão</th>
                                <td>{detail.profession}</td>
                            </tr>
                            <tr>
                                <th>País</th>
                                <td>{detail.country}</td>
                            </tr>
                            <tr>
                                <th>Sobre Mim</th>
                                <td>{detail.applicationText}</td>
                            </tr>
                        </tbody>
                    </table>
                </EachDetailCamp>
                <ButtonEachDetail>
                    <button onClick={rejectCandidate}>Reprovar</button>
                    <button onClick={()=>{decideCandidate(detail.id)}}>Aprovar</button>
                </ButtonEachDetail>
            </EachDetailTrip>
        )
    })

    const listCandidate = render.approved&& render.approved.map((candidate, index)=>{
        return (
            <EachCandidate key={index}><p>{candidate.name}</p></EachCandidate>
        )
    })
    return(
        <LayoutPage> 
            <ListDetailCamp>
                <TittleListDetail>
                    <h1>{nameTrip}</h1>
                </TittleListDetail>
                <ButtonListDetail>
                    <button onClick={()=>{Navigate("/Admin")}}>Voltar</button>
                </ButtonListDetail>
                <MainListDetail>
                    <DetailTripCamp>
                    <CandidatesCamp>
                        <h2>Candidatos aprovados...</h2>
                        {isLoading&&"...Carregando lista de aprovados"}
                        {listCandidate}
                    </CandidatesCamp>
                        <Render>
                            {isLoading&&<AnimLoading/>}
                            {!isLoading&&render&&detailTrip}
                            {!isLoading&&!render&&error}
                        </Render>
                    </DetailTripCamp>
                </MainListDetail>
            </ListDetailCamp>
        </LayoutPage>
        
    )
}

export default TripDetailsPage