import React,{HTMLAttributes} from 'react'
import { Link,Container } from './styles'
import {useHistory} from 'react-router-dom'
import LeftIcon from '../../Icons/Left'
import RightIcon from '../../Icons/Right'

interface ButtonProps {
    name: string,
    direction:boolean,
    color:string,
    to:string
}
const ButtonLInk: React.FC<ButtonProps> = ({ name,direction,color,to }) => {
    const history = useHistory()
    function Click (){
        history.push(to)
    }
    if(direction){
        return (
            <Container>
                <Link onClick={e=>Click()} style={{color:`${color}`}}>{name}</Link>
                <RightIcon color={color} width='35' height='35'/>
            </Container>
        )
    }else{
        return (
            <Container>
                <LeftIcon color={color} width='35' height='35'/>
                <Link onClick={e=>Click()} style={{color:`${color}`}}>{name}</Link>
            </Container>
        )
    }
    
}
export default ButtonLInk;