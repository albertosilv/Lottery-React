import React from 'react'
import {ContainerButton} from './styles'
interface ButtonProps{
    color:string,
    backgroundColor:string,
    name:string,
    click:any,
    borderColor:string

}
const ButtonGame:React.FC<ButtonProps> = ({color,backgroundColor,name,click,borderColor})=>{
    return(
        <ContainerButton border={borderColor} style={{
        backgroundColor:`${backgroundColor}`,color:`${color}`}} onClick={e=>click()}>{name}</ContainerButton>
    )
}

export default ButtonGame