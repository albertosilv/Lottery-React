import styled from 'styled-components'
interface Props {
    border:string
}
  
export const ContainerButton = styled.button<Props>` 
    padding:7px 10px;
    color:#fff;
    border-radius:30px;
    border:2px solid ${props=>props.border?props.border:'#fff'};
    font-size:1em;
    font-weight:500;
    font-style: italic;
    width:120px;
    &:active{
        border-color:${props=>props.border?'#fff':props.border};
    }
`