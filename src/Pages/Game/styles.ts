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
    justify-content:space-around;
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
export const ContainerCard = styled.div`
    margin:20px;
    width:25vw;
    @media(max-width: 950px) {
        width:40vw;
    }
    @media(max-width: 750px) {
        width:90%;
        display:flex;
        justify-content:center;
    }

`
export const ContainerGame = styled.div`
    display:flex;        
    flex-direction:column;
    padding-left:50px;
    width:80vw;
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
export const GameContainer = styled.div`
    width:50%;
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    @media(max-width: 1050px) {
        width:80%;
    }
    @media(max-width: 550px) {
        width:100%;
    }
`
export const Text = styled.span`
    display: flex;
    color:#707070;
    font-weight:600;
    margin: 10px 0px;
`

export const SubTitle = styled.span`
    color:#707070;
    font-size:1em;
    font-weight:500;
    font-style: italic;
    letter-spacing: .1rem;
`
export const Info = styled.div`
    color:#707070;
    font-size:0.9em;
    font-weight:500;
    letter-spacing: 0.1rem;
    width:50vw;
    @media(max-width: 750px) {
        width:100%;
    }
`
export const NumberContainer = styled.div`
    margin:20px 0px;
`

export const ButtonContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    @media(max-width: 750px) {
        flex-direction:column;
        justify-content:center;
        margin:0px;
    }
`

export const ButtonFuncContainer = styled.div`
    @media(max-width: 750px) {
        display:flex;
        flex-direction:row;
    }
    
`


export const AddButton = styled.button`
    display:flex;
    align-items:center;
    padding:10px 25px;
    border: 1px solid #27C383;
    background-color:#27C383;
    color:#fff;
    border-radius:10px;
    @media(max-width: 750px) {
        justify-content:center;
        margin:10px;
    }
    
`
export const Button = styled.button` 
    padding:15px;
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
export const ButtonSubmit = styled.button`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    background-color:#F7F7F7;
    color:#27C383;
    padding:1vw;
    font-size:1.5em;
    margin-bottom:5px;
    margin-top:10px;
    border:none;
    border-radius: 0px 0px 10px 10px;
    font-weight:600;
`