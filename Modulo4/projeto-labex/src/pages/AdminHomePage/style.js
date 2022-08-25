import styled from "styled-components";

export const PainelAdmCamp = styled.div`
    width: 30%;
    height: 65%;
    background: #141414;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 50px;
    @media (max-width : 900px)  {
        width: 90%;
        height: 100%;
    }
    @media (max-width : 700px)  {
        width: 90%;
        height: 80%;
    }
` 

export const TittlePainelAdmCamp = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: cursive;
`

export const ButtonPainelAdmCamp = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
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

export const TravelsPainelAdmCamp = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar-thumb{
        background: #00fff7;
        border-radius: 20px;
    }
    ::-webkit-scrollbar-track{
        background: none;
    }
    ::-webkit-scrollbar{
        background: none;
    }
`

export const CardTravel = styled.div`
    width: 500px;
    height: 100px;
    margin: 10px 0;
    text-align: center;
`

export const EachTrip = styled.div`
    width: 80%;
    height: 15%;
    text-align: center;
    margin: 5px 0;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        width: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        :hover{
            transform: scale(1.1);
            transition: .4s;
            cursor: pointer
        }
    }
    img{
        width: 25px;
        height: 25px;
        font-size: 30px;
        background: none;
        border: none;
        color: red;
        margin: 0 10px;
        :hover{
            transform: scale(1.5);
            transition: .4s;
            cursor: pointer;
        }
    }
`