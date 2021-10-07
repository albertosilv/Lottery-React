import React,{useEffect,useState} from 'react'
import {Button} from './styles'

interface Numbers{
    name:string,
    selected:boolean,
}
interface ButtonProps{
    number:Numbers,
    click:any,
    color:string
}

const NumberButton:React.FC<ButtonProps> = ({number,click,color})=>{
    return (
        <Button onClick={e=>{click(number)}} style={
            {borderColor:number.selected?`${color}`:'#ADC0C4',
            backgroundColor:number.selected?'#fff':'#ADC0C4',
            color:number.selected?color:'#fff'
        }}>{number.name}</Button>
    )
}

export default NumberButton;