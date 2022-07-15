import React from "react";
import { Layout, StyleInput, Btn, Tittle, Select } from "../../style";

const Etapa1 = (props)=>{

    const ProximaTela = (event)=>{
        event.preventDefault()
        props.estarLogado(true)
    }

    return(
        <div>
            <Tittle>
                <h1>Projeto LabenuForms</h1>
            </Tittle>
            <Layout>
                <StyleInput placeholder="Digite seu nome"/>
                <StyleInput placeholder="Digite sua idade"/>
                <StyleInput placeholder="Digite seu e-mail"/>
                <Select>
                    <option>Escolaridade</option>
                    <option>Ensino Médio Incompleto</option>
                    <option>Ensino Médio Completo</option>
                    <option>Ensino Fundamental Incompleto</option>
                    <option>Ensino Fundamental Completo</option>
                </Select>
                <Btn onClick={ProximaTela}>Proximo</Btn>
            </Layout>
        </div>
    )
}

export default Etapa1