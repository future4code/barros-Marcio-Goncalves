import { useState } from "react";
import AstroPage from "../Astro";
import ButtonPage from "../ButtonPage";
import TittleCamp from "../Tittle";
import { Container, LayoutContainer} from "./style";

function LayoutPage(props){

    return(
        <LayoutContainer>
            <Container>
                <TittleCamp/>
                <AstroPage
                    Astro = {props.Astro}
                    SetAstro = {props.SetAstro}
                />
                <ButtonPage
                    Astro = {props.Astro}
                    SetAstro = {props.SetAstro}
                    Match = {props.Match}
                    SetMatch = {props.SetMatch}
                    Logado = {props.Logado}
                    SetLogado = {props.SetLogado}
                />
            </Container>
        </LayoutContainer>
    )
}

export default LayoutPage