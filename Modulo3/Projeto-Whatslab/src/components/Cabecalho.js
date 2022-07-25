import React from "react";
import {Cabecalho} from '../style'
import Logo from '../img/labeZapLogo.svg'
import {MyImage} from '../style'

function Header () {
    return(
        <Cabecalho>
            <MyImage backImage = {Logo}/>
            <h2>
                Labezap
            </h2>
        </Cabecalho>
    )
}

export default Header