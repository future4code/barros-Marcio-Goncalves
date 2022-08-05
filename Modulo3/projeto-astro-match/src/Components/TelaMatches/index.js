    import React, { useEffect } from "react";
    import { AstroCamp } from "../Astro/style";
    import { CampButton } from "../ButtonPage/style";
    import { Container, LayoutContainer } from "../LayoutPage/style";
    import {Tittle } from "../Tittle/style";
    import axios from "axios";
    import { CadaMatch, CampMatch, Icon } from "./style";
    import ImgClear from "../../IMG/clear.png"
    import ImgBack from "../../IMG/back.png"
    import Swal from "sweetalert2";


    function TelaMatch( props ){

    useEffect(()=>{},[])

    const BackPage = ()=>{
        props.SetLogado(false)
    }

    const PutClear = ()=>{

        if(props.Match.length === 0 ){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Sua lista já esta vazia'
            })
        } else{
            Swal.fire({
                title: 'Cuidado!!',
                text: "Deseja realmente Limpar sua lista de match?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sim'
              }).then((result) => {
                if (result.isConfirmed) {
                    axios
                    .put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcio-barros/clear")
                    .then((resp)=>{
                        console.log(resp.data.message);
                    })
                    .catch((er)=>{
                        console.log(er.resp);
                    })
                  
                    Swal.fire(
                        'Lista Limpa!',
                        'Sua lista foi limpa com sucesso.',
                        'success'
                    )
                    }
                })
        }
        

    }

    return(
        <LayoutContainer>
            <Container>
                <Tittle>
                    <h1>AstroMatch</h1>
                </Tittle>
                <AstroCamp>
                    <CampMatch>
                        {props.Match.map((item)=>{
                            return(
                                <CadaMatch key={item.id}>
                                    <img src={item.photo}/>
                                    <h2> {item.name}</h2>
                                </CadaMatch>
                            )
                        })}
                    </CampMatch>
                </AstroCamp>
                <CampButton>
                    <Icon onClick={BackPage} BackImage = {ImgBack}/>
                    <Icon onClick={PutClear} BackImage = {ImgClear}/>
                </CampButton>
            </Container>
        </LayoutContainer>
    )
    
    }

    export default TelaMatch