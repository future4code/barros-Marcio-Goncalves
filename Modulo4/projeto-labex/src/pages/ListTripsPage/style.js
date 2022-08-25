import styled, { keyframes } from "styled-components";

const animLoading = keyframes`
    0%{transform:rotate(0deg)}
    100%{transform:rotate(360deg)}
`

export const ListTripsContainer = styled.div`
    width: 70%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width : 700px)  {
        width: 90%;
        height: 90%;
    }
`

export const TittleListTripsCamp = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width : 700px)  {
        h1{
            position: relative;
            bottom: 20px;
        }
    }
`
export const AnimLoading = styled.div`
    width:60px;
    height: 60px;
    background: none;
    border: 10px solid #00fff7;;
    border-top: 10px solid transparent;
    border-radius: 50%;
    animation: ${animLoading} .5s linear infinite;
`

export const MainListTripsCamp = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const ListTripsCamp = styled.div`
    width: 95%;
    height: 95%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    overflow-y: auto;
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

    @media (max-width : 700px)  {
        width: 100%;
        height: 100%;
        
    }
`
export const EachListTrips = styled.div`
    width: 30%;
    height: 90%;
    background: #141414;
    display: flex;
    flex-direction: column;
    border-radius: 50px;
    margin: 10px 0;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 17px;
        p{
            margin: 10px;
            font-size: 20px;
        }
    }
    @media (max-width : 700px)  {
        width: 90%;
        height: 100%;
    }
`

export const EachListTripsText = styled.div`
    width: 100%;
    height: 85%;
    overflow-y: auto;
`

export const EachListTripsBtn = styled.div`
    width: 100%;
    height: 15%;
    img{
            width: 40px;
            height: 40px;
            cursor: pointer;
            :hover{
                transform: scale(1.1);
                transition: .4s ease-in-out;
            }
        }
`

export const ButtonListTripsCamp = styled.div`
    width: 100%;
    height: 10%;
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
        cursor: pointer;
        :hover{
            background: #00fff7;
            color: black;
            border: none;
            transition: .4s ease-in-out;
        }
    }

    @media (max-width : 700px)  {
        width: 90%;
        button{
            position: relative;
            top: 0px;
        }
    }
`