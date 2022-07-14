import React, { useState } from "react";
import { useTheme } from "styled-components";
import { CarrinhoStyle } from "../style";
import { ListaProdutos } from "./Produto"

function Carrinho(){
    const [ CarList, SetCarList] = useState(["Lista Mostrada com Sucesso"])
    
    return(
        <CarrinhoStyle>
            <h3>Carrinho</h3>
            <ul>
                {
                    CarList.map(item=>
                        <li>{item}</li>)
                }
            </ul>
        </CarrinhoStyle>
    )
}

export default Carrinho