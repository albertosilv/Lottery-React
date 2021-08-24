import React from 'react'
import {Card} from './styles'
const CardContainer:React.FC=({children})=>{
    return(
        <Card>{children}</Card>
    )
}
export default CardContainer;