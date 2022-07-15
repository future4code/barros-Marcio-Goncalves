import styled from "styled-components";

export const StyleInput = styled.input`
    width: 600px;
    height: 20px;
    margin: 15px 0;
    text-align: center;
    font-size: 18px;
    border: none;
    border-bottom: 1px solid black;
    background: none;
    outline: 0;

    ::placeholder{
        color: black;
    }

    :focus{
        border-bottom: 1px solid red;
        ::placeholder{
            color: white;
        }
    }
`

export const Layout = styled.div`
    width: 100%;
    height: 90vh;
    background: grey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Btn = styled.button`
    width: 250px;
    height: 30px;
    font-size: 20px;
    background: none;
    border: none;
    margin: 10px 0;
    :hover{
        background: red;
        transition: .6s;
        border-radius: 10px;
        cursor: pointer;
    }
`

export const Tittle = styled.div`
    width: 100%;
    height: 10vh;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Select = styled.select`
    width: 600px;
    height: 30px;
    text-align: center;
    font-size: 18px;
    margin: 10px 0;
    background: none;
    outline: 0;
    option{
        background: none;
    }
`
export const CardFinal = styled.div`
    width: 80vw;
    height: 200px;
    background: red;
    display: flex;
    align-items: center;
    justify-content: center;
`
