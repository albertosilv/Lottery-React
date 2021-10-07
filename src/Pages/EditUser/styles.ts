import styled from "styled-components"
interface Colum{
    flex:number
}
export const Container = styled.div`
    display: flex;
    flex-direction:column;
` 
export const Section = styled.div`
    width:100vw;
    display: flex;
    padding-top:30px;
    justify-content:center;
    @media(max-width: 750px) {
        flex-direction: column;
        justify-content:center;
    }
`
export const Link = styled.button`
    border:none;
    outline:0;
    font-size:1.2em;
    background-color:transparent;
    font-weight:600;
    margin:0px 50px;
    font-style: italic;
    color:#707070;
`
export const AccountContainer = styled.div`
    display:flex;        
    flex-direction:column;
    justify-content:center;
    padding-left:50px;
    width:60vw;
    @media(max-width: 750px) {
        display:flex;
        justify-content:center;
        flex-direction:column;
        width:100%;
        padding:10px;
    }
`

export const HeaderContainer = styled.div`
    flex-direction:column;
    justify-content:space-around;

`
export const FormContainer = styled.div`
    margin:20px 0px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`

export const Button = styled.button` 
    width:20%;
    padding:10px;
    margin:3px;
    border-radius:10px;
    border: 1px solid #27C383;
    color:#27C383;
    background-color:#fff;
    @media(max-width: 750px) {
        flex-direction:column;
        justify-content:center;
        margin:10px;
    }
    &:hover {
        border: 1px solid #27C383;
        color:#fff;
        background-color:#27C383;
      }
`
export const Message = styled.span`
    color:#B5C401;
    margin:10px;
`