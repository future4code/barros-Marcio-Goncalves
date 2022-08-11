import React, { useCallback } from "react";
import { LayoutPage } from "../../style";
import { HomeContainer, InputHomeCamp, TittleHomeCamp } from "./style";
import Rocket from '../../IMG/rocket1.png'
import { useNavigate } from "react-router-dom";

function HomePage(){

   
 const Navigate = useNavigate()
    return(
        <LayoutPage>
            <HomeContainer>
                <TittleHomeCamp>
                    <img src={Rocket}/>
                    <h1>Labe-<label>X</label></h1>
                </TittleHomeCamp>
                <InputHomeCamp>
                    <button onClick={()=>{Navigate("/ListadeViagens")}}>Consultar Viagens</button>
                    <button onClick={()=>{Navigate("/login")}}>Area Admin</button>
                </InputHomeCamp>
            </HomeContainer>
        </LayoutPage>
    )
}

export default HomePage