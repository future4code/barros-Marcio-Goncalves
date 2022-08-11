import styled from "styled-components";

export const CampButton = styled.div`
    width: 100%;
    height: 15%;
    background: #5c018a;
    border-bottom-left-radius:50px;
    border-bottom-right-radius:50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
`

export const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-image: url(${(props)=>props.BackImage});
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 70px;
    :hover{
        transition: .4s;
        transform: scale(1.5);
        cursor: pointer;
    }
`