import styled from "styled-components"
export const Container = styled.div`
    width:100vw;
    display: flex;
    flex-direction:column;
    
` 
export const Section = styled.div`
    width:100%;
    display: flex;
    flex-direction:column;
    padding-top:30px;
    padding-left:10vw;
    @media(max-width: 750px) {
        justify-content:center;
        padding-left:10px;
    }
`   
export const Wrapper = styled.div`
    width:60%;
    display: flex;
    flex-direction:row;    
    justify-content:space-around;
    align-items:center;
    @media(max-width: 750px) {
        flex-direction: column;
        width:100%;
        order:2;
    }
`
export const HeaderContainer = styled.div`

    display: flex;
    flex-direction:row;
    align-items:center;
    @media(max-width: 750px) {
        flex-direction: column;
    }
`
export const ButtonContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    @media(max-width: 650px) {
        width:100%;
        justify-content:space-between;
    }

`
export const Text = styled.span`
    color:#707070;
`
export const CardsContainer = styled.div`
    display:flex;
    flex-direction:column;
`