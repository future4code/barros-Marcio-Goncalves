import styled from "styled-components";

export const CreateTripCamp = styled.div`
    width: 25%;
    height: 70%;
    background: #141414;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 100px;
    @media (max-width : 1100px)  {
        width: 90%;
        height: 100%;
    }
    @media (max-width : 700px)  {
        width: 90%;
        height: 80%;
    }
`

export const TittleCreateTripCamp = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const InputCreateTripCamp = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 30px;
    input{
        width: 400px;
        height: 30px;
        margin: 20px 0;
        border-radius: 10px;
        font-size: 20px;
        text-align: center;
        font-weight: bold;
        background: none;
        border: none;
        outline: 0;
        color: white;
        ::placeholder{
            font-weight: bold;
            color: white;
        }
        :hover{
            border-bottom: 1px solid #00fff7;
        }
        :focus{
            border-bottom: 3px solid #00fff7;
        }
        @media (max-width : 700px)  {
        width:70vw;
    }
    }

    input[type='date']{
            color: white;
            text-transform: uppercase;

            ::-webkit-calendar-picker-indicator{
            cursor: pointer;
            }
            
    @media (max-width : 700px)  {
        width:70vw;
    }
        }

        

    select{
        -webkit-appearance:none;
        -moz-appearance: none;
        width: 400px;
        height: 35px;
        border-radius: 10px;
        font-size: 20px;
        text-align: center;
        outline: 0;
        margin: 15px 0;
        border: none;
        background: none;
        color: white;
        ::placeholder{
            color: white;
        }
        option{
            background: black;
            :hover{
                background: red;
                color: red;
            }
        }
        @media (max-width : 700px)  {
        width:70vw;
    }
    }

`
export const ButtonCreateTripCamp = styled.div`
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
        position: relative;
        right: 35px;
        top: 70px;
        :hover{
            background: #00fff7;
            color: black;
            border: none;
            transition: .4s ease-in-out;
        }
    }

`
