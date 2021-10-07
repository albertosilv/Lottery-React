import styled from 'styled-components'
export const Container = styled.div`
    margin:10px;
    width:30vw;
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    @media(max-width: 650px) {
        display:none;
    }
`
export const Label = styled.span`
    color:#707070;
    font-size:4vw;
    font-weight:600;
    font-style: italic;
    letter-spacing: .1rem;
`
export const ContainerButton = styled.button` 
    margin: 20px 0px;
    background-color:#B5C401;
    padding:5px 30px;
    color:#fff;
    border-radius:20px;
    border:none;
    font-size:2vw;
    width:15vw;
`
export const LotteryText = styled.span`
    color:#707070;
    font-size:5vw;
    font-weight:600;
    font-style: italic;
    letter-spacing: .1rem;
    text-transform: uppercase;
`