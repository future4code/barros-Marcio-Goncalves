import styled, { keyframes } from "styled-components";

const Anim = keyframes`
    0%{transform: translateY(0px);}
    50%{transform: translateY(-700px);}
    100%{transform: translateY(0px);}
`

const AnimX = keyframes`
    0%{color:#00fff7}
    50%{color:white}
    100%{color:#00fff7}
`

export const TittleHomeCamp = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    img{
        width: 150px;
        height: 100px;
        position: relative;
        left: 48px;
        top: 25px;
        animation: ${Anim} 10s cubic-bezier(.5,.09,.05,1) infinite;
    }
    h1 label{
        color:#00fff7 ;
        animation: ${AnimX} 10s ease 2s infinite;
    }
`

export const HomeContainer = styled.div`
    width: 30%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: end;
    flex-direction: column;
`

export const InputHomeCamp = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    button{
        width: 170px;
        height: 40px;
        border-radius: 20px;
        font-size: 16px;
        font-weight: bold;
        border: none;
        background: none;
        color: white;
        :hover{
            background: #00fff7;
            color: black;
            border: none;
            transition: .4s ease-in-out;
        }
    }
`