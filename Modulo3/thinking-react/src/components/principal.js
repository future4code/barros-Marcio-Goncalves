import React, { useState } from "react";
import { PrincipalStyle, CardProduto } from "../style";
import { ListaProdutos } from "./Produto"

function Principal (){
    const [ Produto, SetProduto ] = useState(ListaProdutos) 
    function AdicionarCarrinho(){

    }

    return(
        <PrincipalStyle>
            <CardProduto>
                            
            </CardProduto>
        </PrincipalStyle>
    )
}

export default Principal