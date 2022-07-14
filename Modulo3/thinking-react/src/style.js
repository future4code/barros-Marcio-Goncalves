import styled from "styled-components";

export const StyleFilter = styled.div`
    width: 20vw;
    height: 100%;
    border: 2px solid black;
    display: flex;
    align-items: center;
    flex-direction: column;

    input{
        margin: 10px 0;
        position: relative;
        left: 45px;
        text-align: center;
    }

`

export const CarrinhoStyle = styled.div`
    width: 20vw;
    height: 100vh;
    border: 2px solid black;
`

export const PrincipalStyle = styled.div`
    width: 60vw;
    height: 100vh;
    border: 2px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const CardProduto = styled.div`
    width: 15vw;
    height: 20vw;
    background-color: red;
    margin: 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;

    img{
        width: 13vw;
        height: 20vh;
        margin-top: 2vh;
    }
`