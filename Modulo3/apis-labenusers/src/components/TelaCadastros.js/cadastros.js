import React from "react";
import { CadastrosContainer, LayoutContainer, CampoUsuarios } from "../../style";

function Cadastros(props){

    function TrocarTela(){
        props.SetLogado(false)
    }

    return(
        <LayoutContainer>
            <CadastrosContainer>
                <CampoUsuarios>
                    {props.Mostrar.map((nome)=>{
                        return(
                            <table key={nome.id} border={1}>
                                <td>{nome.name}</td>
                            </table>
                        )
                    })}
                </CampoUsuarios>
                <button onClick={TrocarTela}> Voltar </button>
            </CadastrosContainer>
        </LayoutContainer>
    )
}

export default Cadastros