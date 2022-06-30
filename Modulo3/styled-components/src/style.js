import styled from "styled-components";

export const Cabecalho = styled.div`

    width: 100%;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const MyImage = styled.div`

    background-image: url(${(props)=>props.backImage});
    width: 70px;
    height: 70px;
    background-size: cover;

`

export const Main = styled.div`

    width: 70vw;
    height: 87vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;

`
export const Botao = styled.button`

    width: 200px;
    height: 30px;
    margin: 0 10px;

`
export const Input = styled.input`

    width: 200px;
    height: 30px;
    margin: 0 10px;

`
export const Label = styled.label`

    margin: 0 20px;
    font-weight: bold;
    
`
export const BoxMsgn = styled.div`

    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;

`
export const Side = styled.div`

    width: 15vw;
    height: 87vh;
    background: orange;
`

export const Rodape = styled.div`

    width: 100vw;
    height: 3vh;
    background: rgb(155, 155, 156);;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
       font-size:18px ;
    }

`