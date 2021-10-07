import React from 'react'
import {ContainerButton} from './styles'
import{GameProps} from '../../Interface/Game'
interface ButtonProps{
    game:GameProps,
    click:any,
}
const ButtonGame:React.FC<ButtonProps> = ({game,click})=>{
    if(game.selected){
        return(  <ContainerButton border={game.color} style={{
            backgroundColor:`${game.color}`,color:`#fff`}} onClick={e=>click(game)}>{game.type}</ContainerButton>)
    }else{
        return(
            <ContainerButton border={game.color} style={{
                backgroundColor:`#fff`,color:`${game.color}`}} onClick={e=>click(game)}>{game.type}</ContainerButton>
        )
        
    }
}

export default ButtonGame