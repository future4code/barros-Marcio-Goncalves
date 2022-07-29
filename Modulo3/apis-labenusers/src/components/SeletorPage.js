import React, { useState } from "react";
import { LayoutContainer } from "../style";
import Cadastros from "./TelaCadastros.js/cadastros";
import Usuarios from "./TelaUsuarios/usuarios";

function Seletor(){

    const [Logado, SetLogado] = useState(false)
    const [Mostrar, SetMostrar]=useState([])

    if(Logado){
        return(
        <LayoutContainer>
            <Cadastros
                Logado = {Logado}
                SetLogado = {SetLogado}
                Mostrar = {Mostrar}
                SetMostrar = {SetMostrar} 
            ></Cadastros>
        </LayoutContainer>
        )
    } else{
        return(
            <LayoutContainer>
              <Usuarios
                Logado = {Logado}
                SetLogado = {SetLogado}
                Mostrar = {Mostrar}
                SetMostrar = {SetMostrar}
              />
            </LayoutContainer>
            )
    }
}

export default Seletor