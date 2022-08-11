import styled from "styled-components";


export const Tittle = styled.div`
    width: 100%;
    height: 10%;
    background: #5c018a;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-top: 1px solid black;
    h1{
        color: white;
        font-family: 'Courier New', Courier, monospace;
    }
    
`

export const Icon = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${(props)=>props.PerfilIcon});
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    left: 320px;
`