import React from "react";
import { LayoutPage } from "../../style";
import { HomeContainer, InputHomeCamp, TittleHomeCamp } from "./style";
import Rocket from '../../IMG/rocket1.png'

function HomePage(){
    return(
        <LayoutPage>
            <HomeContainer>
                <TittleHomeCamp>
                    <img src={Rocket}/>
                    <h1>Labe-<label>X</label></h1>
                </TittleHomeCamp>
                <InputHomeCamp>
                    <button>Consultar Viagens</button>
                    <button>Area Admin</button>
                </InputHomeCamp>
            </HomeContainer>
        </LayoutPage>
        
    )
}

export default HomePage