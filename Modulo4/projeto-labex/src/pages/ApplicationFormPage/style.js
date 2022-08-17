import styled from "styled-components";

export const FormCamp = styled.div`
    width: 30%;
    height: 70%;
    background: #141414;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius:100px ;
    @media (max-width:700px) {
            width: 90%;
            height: 90%;
        }
`

export const TittleCamp = styled.div`
    width: 80%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: cursive;
    font-size: 20px;
    position: relative;
    bottom: 90px;
    label{
        color: #00fff7;
    }
    @media (max-width:700px) {
            position: relative;
            bottom: 10px;
            text-align: center;
        }
`

export const InputCamp = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    input{
        width: 500px;
        height: 35px;
        margin: 15px 0;
        border-radius: 10px;
        border: none;
        background: none;
        outline: 0;
        text-align: center;
        font-size: 20px;
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
        
    }

    select{
        width: 500px;
        height: 35px;
        border-radius: 10px;
        font-size: 20px;
        text-align: center;
        outline: 0;
        margin: 15px 0;
        border: none;
        background: none;
        color: white;
        option{
            background: black;
            :hover{
                background: red;
                color: red;
            }
        }
    }

    @media (max-width:700px) {
            width: 100%;
            height: 80%;
            input{
                ::placeholder{
                    color:#00fff7;
                }
            }
            select{
                color:#00fff7;
            }
        }
`

export const ButtonCamp = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button{
        width: 150px;
        height: 40px;
        border: none;
        border-radius: 20px;
        font-weight: bold;
        font-size: 20px;
        background: none;
        cursor: pointer;
        color: white;
        margin-top: 50px;
        :hover{
            background: #00fff7;
            color: black;
            border: none;
            transition: .4s ease-in-out;
        }
    }

    @media (max-width:700px) {
            button{
                position: relative;
                bottom: 20px;
            }
        }

`