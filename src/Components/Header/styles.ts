import styled from'styled-components'

export const Container = styled.div`
    flex:1;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    width:100vw;
    border-bottom:1px solid #DDDDDD;
    align-items:center;
`
export const Column = styled.div`
    display:flex;
    flex-direction:row;
`

export const Title = styled.div`
    color:#707070;
    font-size:3em;
    font-weight:600;
    font-style: italic;
    letter-spacing: .1rem;
    text-transform: uppercase;
    
`

export const Border = styled.div`
    border: 2px solid #B5C401; 
    width:100%;
    height:5%;
    border-radius:20px;
    margin-bottom:-5px;
`

export const Link = styled.button`
    border:none;
    outline:0;
    font-size:1.2em;
    background-color:transparent;
    font-weight:600;
    margin:0px 10px;
    font-style: italic;
    color:#707070;
`