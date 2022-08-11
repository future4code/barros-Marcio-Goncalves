import styled from "styled-components";

export const AstroCamp = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const AstroPhoto = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    background: #cac6cc;
    flex-direction: column;
    align-items: center;
    border-left: 1px solid black;
    border-right: 1px solid black;
    img{
        width: 30vw;
        height: 570px;
        margin: 10px 0;
    }
`

export const CampDescription = styled.div`
    width: 30vw;
    height: 15vh;
    text-align: center;
    background: rgba(15, 15, 15, 0.4);
    position: absolute;
    top: 610px;
    h2{
        position: relative;
        bottom:10px;
        font-size: 30px;
        color: white;
        opacity: 0.8;
    }
    label{
        font-size: 20px;
        font-weight: bold;
        position: relative;
        bottom: 35px;
        color: white;
        opacity: 0.8;
    }
`