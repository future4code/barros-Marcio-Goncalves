import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`
// ---------------------------------------------------------------------------
export const Cabecalho = styled.div`
    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MyImage = styled.div`
    background-image: url(${(props)=>props.backImage});
    width: 60px;
    height: 60px;
    background-size: cover;
    background-repeat: no-repeat;
`

// -----------------------------------------------------------------------------

export const PagePrincipal = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
`

export const Side = styled.div`
    width: 15vw;
    height: 100%;
    background-color: orange;
`

export const Main = styled.div`
    width: 70vw;
    height: 100%;
    background-color: white;
`

export const TelaMensagem = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CaixaMensagem = styled.div`
    width: 90%;
    height: 90%;
    background-color: white;
    border-radius:  10px;
    display: flex;
    align-items: end;
`

export const CampoMensagem = styled.form`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CampoUsuario = styled.div`
    width: 50%;
    height: 100%;
    border: 2px solid black;
    display: flex;
    justify-content: end;
    align-items: end;
`
export const CampoNPC = styled.div`
    width: 50%;
    height: 100%;
    border: 2px solid black;
`

export const BoxMensagem = styled.div`
    height: 40px;
    background: rgba(245, 54, 63, 0.3);
    color: black;
    font-size: 15px;
    margin-top: 2px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:20px;
    p{
        margin: 0 20px;
    }

    li{
        list-style-type: none;
    
    }
`

export const BoxMensagem2 = styled.div`
    height: 40px;
    color: green;
    font-size: 22px;
    border: 1px solid black;
    margin-top: 2px;
    margin-right: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        margin: 0 20px;
    }
`
// --------------------------INPUTS, BUTTONS, LABELS----------------------------------------------------

export const Input = styled.input`
    width: 250px;
    height: 20px;
    text-align: center;
    border: none;
    outline: 0;
    :hover{
        border-bottom: 2px solid orangered;
        transition: .4s;
    }

    :focus{
        border-bottom: 2px solid orangered;
    }
`

export const Label = styled.label`
    height: 20px;
`

export const Btn = styled.button`
    width: 30px;
    height: 30px;
    margin: 0 10px;
    font-size: 16px;
`

//--------------------------------------------------------------------------------- 

export const PageRodape = styled.div`
    width: 100%;
    height: 5vh;
    display: flex;
    justify-content: center;
`