import React from "react";
import{Main, Side, BoxMsgn, Botao, Input, Label}from '../style'

function telaInicial(){
    return(
        <div className="TelaInicial">
            <Side></Side>
                <Main>
                    <BoxMsgn>
                        <Label>Remetente</Label>
                        <Input></Input>
                        <Label>Mensagem</Label>
                        <Input></Input>
                        <Botao>Enviar Mensagem</Botao>
                    </BoxMsgn>
                </Main>
            <Side></Side>
        </div>
    )
}

export default telaInicial