import styled from "styled-components";

export const LoginCamp = styled.div`
    width: 25%;
    height: 55%;
    display: flex;
    background: #141414;
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

export const TittleLoginCamp = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const FormLoginCamp = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
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
    }
    @media (max-width : 500px)  {
        input{
            :hover{
                border-bottom: none;
            }
            :focus{
                border-bottom: none;
            }
        }
    }
`

export const ButtonLoginCamp = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
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