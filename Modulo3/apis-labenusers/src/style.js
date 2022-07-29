import styled from "styled-components";

export const LayoutContainer =styled.div`
    width: 100vw;
    height: 100vh;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CadastrosContainer = styled.div`
    width: 60vw;
    height: 90vh;
    background: rgba(56, 56, 54);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 20px;
    button{
        margin: 20px 0;
        width: 100px;
        font-weight: bold;
        font-size: 20px;
        position: absolute;
        bottom: 50px;
        background: none;
        border: none;
        color: rgba(78, 255, 8);
        :hover{
            transform: scale(1.3);
            transition: 0.4s;
        }
    }
`

export const CampoUsuarios = styled.div`
    width: 55vw;
    height: 60vh;
    background-color: white;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius:20px ;

    table td{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 250px;
        height: 30px;
        text-align: center;
        font-size: 20px;
        text-transform: uppercase;
    }
`

export const CampoInputs = styled.div`
    width: 500px;
    height: 700px;
    background: rgba(56, 56, 54);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    input{
        color: rgba(78, 255, 8);
        width: 200px;
        height: 30px;
        margin: 15px 0;
        text-align: center;
        background: none;
        border: none;
        outline: 0;
        font-size: 20px;
        border-bottom: 2px solid black;

        ::placeholder{
            color: rgba(78, 255, 8);
            font-weight: bold;
        }
    }

    button{
        width: 180px;
        margin: 20px;
        background: none;
        border: none;
        outline: 0;
        font-size: 17px;
        color: rgba(78, 255, 8);
        :hover{
            transform: scale(1.2);
            transition: .4s ease-in-out;
        }
    }

    p{
        color: white;
    }

    p a{
        color: red;
        font-size: 25px;
        margin: 0 20px;
    }
`