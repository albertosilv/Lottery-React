import React from 'react'
import {Card} from './styles'
interface CardProp{
    style?:Object,
}
const CardContainer:React.FC<CardProp>=({children,style})=>{
    return(
        <Card style={style}>{children}</Card>
    )
}
export default CardContainer;