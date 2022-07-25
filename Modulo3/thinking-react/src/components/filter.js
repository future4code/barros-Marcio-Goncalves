import React from "react";
import { StyleFilter } from "../style";
function Filter(){
    return(
        <StyleFilter>
            <div>
                <h2>Filtro</h2>
            </div>
            <form>
                <input
                    placeholder="Valor minimo"
                />
                <input
                    placeholder="Valor maximo"
                />
                <input
                    placeholder="Busca por nome"
                />
            </form>
        </StyleFilter>
    )
}

export default Filter