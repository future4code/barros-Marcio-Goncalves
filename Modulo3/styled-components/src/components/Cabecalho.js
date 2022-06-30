import React from "react";
import {Cabecalho} from '../style'
import Logo from '../img/logo_inicial.svg'
import { MyImage } from '../style';

function Topo(){
    return(
        <Cabecalho>
            <MyImage backImage = {Logo}></MyImage>
            <h1>LabZap</h1>
        </Cabecalho>
    )
}

export default Topo