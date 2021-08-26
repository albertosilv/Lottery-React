import styled from 'styled-components'
interface Props {
    border:string
}
  
export const ContainerButton = styled.button<Props>` 
    margin: 20px 10px;
    padding:5px 30px;
    color:#fff;
    border-radius:30px;
    border:1px solid ${props=>props.border?props.border:'#fff'};
    font-size:1.5em;
    width:15%;
    &:active{
        border-color:${props=>props.border?'#fff':props.border};
    }
`