import styled from "styled-components";
interface Card{
    colorGame:string
}
export const Container = styled.div`
    width:100%;
    height:100%;
    display:flex;
    margin:5px 0px;
`

export const Border = styled.div<Card>`
    border:2px solid ${(props)=>props.colorGame};
    border-radius:20px;
`
export const InfoContainer = styled.div`
    height:100%;
    width:70%;
    display:flex;
    margin:10px;
    flex-direction:column;
    word-wrap: break-word;
`
export const NumberContainer = styled.div`
    color:#707070;
    font-size:1em;
    font-weight:500;
    letter-spacing: 0.1rem;
`

export const TitleGame = styled.span<Card>`
    color:${(props)=>props.colorGame};
    font-size:1em;
    font-weight:600;
    letter-spacing: 0.1rem;
`
export const Info = styled.span`
    color:#707070;
    font-size:0.9em;
    font-weight:500;
    letter-spacing: 0.1rem;
    margin-left:10px;
`
export const Button = styled.button`
    border:none;
    background-color:transparent;
    padding:10px;
 `