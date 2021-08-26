import React,{HTMLAttributes} from 'react'
import { Link,Container } from './styles'
import {useHistory} from 'react-router-dom'
import LeftIcon from '../../Icons/Left'
import RightIcon from '../../Icons/Right'

interface ButtonProps {
    name: string,
    direction:boolean,
    color:string,
    to:string,
    width:string,
    heigth:string,
    fontSize:string
}
const ButtonLink: React.FC<ButtonProps> = ({ name,direction,color,to,width='35',heigth='35',fontSize='2em' }) => {
    const history = useHistory()
    function Click (){
        history.push(to)
    }
    if(direction){
        return (
            <Container>
                <Link onClick={e=>Click()} style={{color:`${color}`,fontSize:`${fontSize}`}}>{name}</Link>
                <RightIcon color={color} width={width} height={heigth}/>
            </Container>
        )
    }else{
        return (
            <Container>
                <LeftIcon color={color} width={width} height={heigth}/>
                <Link onClick={e=>Click()} style={{fontSize:`${fontSize}`,color:`${color}`}}>{name}</Link>
            </Container>
        )
    }
    
}
export default ButtonLink;