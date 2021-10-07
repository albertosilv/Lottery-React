import styled from "styled-components"
export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: row;
    padding:90px;
    justify-content:space-around;
    align-items:center;
    @media(max-width: 650px) {
        flex-direction: column;
    }
` 
export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content:center;
`
export const ResetContainer= styled.div`
flex:1;
display:flex;
justify-content:flex-end;
margin:30px;
`
export const Reset = styled.button`
border:none;
outline:0;
font-size:1em;
background-color:transparent;
color:#DDDDDD;
`
export const ErrorMessage = styled.span`
    color:#B5C401;
`