import React from "react";
import './CardPequeno.css'

function CardPequeno(props){
    return(
        <div className="SmallCard-Container">
            <img src={props.imagem}/>
            <h4>{ props.tittle}</h4>
            <p>{ props.descricao}</p>
        </div>
    )
}

export default CardPequeno;