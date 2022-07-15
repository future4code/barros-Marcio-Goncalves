import React from "react";
import { Tittle, Layout, StyleInput, Btn } from "../../style";

const Etapa2=(props)=>{

    const ProximaTela = (event)=>{
        event.preventDefault()
        props.estarLogado(true)
    }

    return(
        <>
            <Tittle>
                <h1>Projeto LabenuForms</h1>
            </Tittle>
            <Layout>
                <StyleInput placeholder="Digite seu curso superior"/>
                <StyleInput placeholder="Digite a instituição de ensino"/>
                <Btn>Proximo</Btn>
                <Btn onClick={ProximaTela}>Não se aplica</Btn>
            </Layout>
        </>
    )
}

export default Etapa2