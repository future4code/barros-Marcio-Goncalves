import React from "react";
import { Tittle, Layout, StyleInput, Btn, Select } from "../../style";

const Etapa3 = ()=>{

    const ProximaTela = (event)=>{
    // event.preventDefault()
    // props.estarLogado(true)

}

    return(
        <>
            <Tittle>
                <h1>Projeto LabenuForms</h1>
            </Tittle>
            <Layout>
                <StyleInput placeholder="Porque nâo realizou um curso superior?"/>
                <Select>
                    <option>Você fez algum curso complementar?</option>
                    <option>Curso Técnico</option>
                    <option>Cursos de Inglês</option>
                    <option>Não fiz nenhum curso complementar</option>
                </Select>

                <Btn onClick={ProximaTela}>Proximo</Btn>
                
            </Layout>
        </>
    )
}

export default Etapa3