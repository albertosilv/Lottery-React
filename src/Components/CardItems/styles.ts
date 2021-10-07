import styled from'styled-components'
interface Card{
    colorGame:string
}
export const Container = styled.div<Card>`
    height:12vh;
    display:flex;
    margin-top:50px;
`
export const Border = styled.div<Card>`
    border:3px solid ${(props)=>props.colorGame};
    border-radius:20px;
    margin-right:10px;
`
export const InfoContaier = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    word-wrap: break-word;
`
export const NumberContainer = styled.span`
    color:#707070;
    font-size:1.3em;
    font-weight:600;
    letter-spacing: 0.1rem;
`

export const TitleGame = styled.span<Card>`
    height:33.5%;
    color:${(props)=>props.colorGame};
    font-size:1em;
    font-weight:600;
    letter-spacing: 0.1rem;
`
export const Info = styled.span`
    height:33%;
    color:#707070;
    font-size:0.9em;
    font-weight:500;
    letter-spacing: 0.1rem;
    margin-right:10px;
`