import styled from "styled-components";

export const ListDetailCamp = styled.div`
    width: 30%;
    height: 60%;
    background: #141414;
    display: flex;
    flex-direction: column;
    border-radius: 30px;
    @media (max-width : 500px)  {
        width: 90%;
        height: 100%;
    }
`

export const TittleListDetail = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ButtonListDetail = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
export const MainListDetail = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
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
`

export const DetailTripCamp = styled.div`
    width: 99%;
    height: 90%;
`

export const EachDetailTrip = styled.div`
    width: 100%;
    height: 300px;
    background: black;
    margin: 5px 0;
    text-align: center;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    @media (max-width : 500px)  {
        width: 100%;
    }
`

export const ButtonEachDetail = styled.div`
    width: 100%;
    height: 20%;
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

export const EachDetailCamp = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    align-items: center;
    flex-direction: column;
    table{
        width: 100%;
        height: 100%;
        th{
            width: 100px;
            height: 40px;
        }
    }
`

export const CandidatesCamp = styled.div`
    width: 100%;
    height: 200px;
    background: #161616;
    display: flex;
    align-items: center;
    flex-direction: column;
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
`

export const EachCandidate = styled.div`
    width: 98%;
    height: 40px;
    background: #202020;
    text-align: center;
    margin: 3px 0;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`