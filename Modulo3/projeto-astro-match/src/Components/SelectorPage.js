import { useState } from "react";
import LayoutPage from "./LayoutPage";
import TelaMatch from "./TelaMatches";


function SelectorPage(){
    const [Astro, SetAstro] = useState([])
    const [Match, SetMatch] = useState([])
    const [Logado, SetLogado] = useState(false)
    
    if(Logado){
        return(
            <TelaMatch
            Astro = {Astro}
            SetAstro = {SetAstro}
            Match = {Match}
            SetMatch = {SetMatch}
            Logado = {Logado}
            SetLogado = {SetLogado}
        />
        ) 
    } else{
        return(
        <LayoutPage
            Astro = {Astro}
            SetAstro = {SetAstro}
            Match = {Match}
            SetMatch = {SetMatch}
            Logado = {Logado}
            SetLogado = {SetLogado}
        ></LayoutPage>
        )
    }
}

export default SelectorPage