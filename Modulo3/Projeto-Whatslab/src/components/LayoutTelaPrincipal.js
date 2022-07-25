import React, { useState } from "react";
import {PagePrincipal, Side, Main, TelaMensagem, CampoMensagem, Input, Label, Btn, CaixaMensagem, BoxMensagem, BoxMensagem2,} from "../style";


function TelaPrincipal(){

    const [inputRemetente, SetInputRemetente] = useState("")
    const [lista, SetLista] = useState([])
    const [ lista2, SetLista2] = useState(["Obrigado Labenu!!!"])

    const handleChange = (event)=>{
        SetInputRemetente(event.target.value)
     }

     const timerResp = ()=>{
        return(
           lista2.map(item =>
            <p>{item}</p>
            )
        );
        
     }

    return(
        <PagePrincipal>
            <Side></Side>
            <Main>
                <TelaMensagem>
                    <CaixaMensagem> 
                    <ul>
                        {lista.map(item =>
                            <BoxMensagem>
                                <p>Conteudo:</p>
                                <p>{item}</p>
                            </BoxMensagem>)}
                    </ul>
                    <ul>
                        
                    </ul>
                    </CaixaMensagem>
                </TelaMensagem>
                <CampoMensagem>
                    <Label>Mensagem</Label>
                    <Input
                        value={inputRemetente}
                        onChange={handleChange} 
                        type="text"
                    />
                    <Btn className="Btn" onClick={adicionarMensagem}>
                    </Btn>
                </CampoMensagem>
            </Main>
            <Side></Side>
        </PagePrincipal>
    );

    function adicionarMensagem(event){
        if(inputRemetente  === ""){
            alert("Digite uma mensagem")
            event.preventDefault()
        } else{
            SetLista([...lista, inputRemetente]);
            SetInputRemetente("")
            event.preventDefault()
            timerResp()
        }
    }
}

export default TelaPrincipal