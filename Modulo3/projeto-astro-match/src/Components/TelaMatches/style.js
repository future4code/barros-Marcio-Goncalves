import styled from "styled-components"

export const CampMatch = styled.div`
    width: 100%;
    height: 100%;
    background: white;
    border: 2px solid black;
`

export const CadaMatch = styled.div`
    display: flex;
    align-items: center;
    width: 95%;
    height: 60px;
    border: 1px solid #5c018a;
    border-radius: 20px;
    margin: 10px;
    background: #cac6cc;
    img{
        width: 55px;
        height: 55px;
        margin: 0 10px;
        border-radius: 50%;
    }
    h2{
        position: relative;
        left: 120px;
    }
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