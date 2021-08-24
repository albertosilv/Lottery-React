import React from 'react'
import {Container} from './styles'
import Card from '../../Components/Card'
import Input from '../../Components/Input'
const Game:React.FC=()=>{
    function handle (element:string){
        console.log(element)
    }
    return(
        <Container>
            <Card>
                <Input placeholder="Email" onChange={handle}/>
                <Input placeholder="Password" onChange={handle}/>
            </Card>
        </Container>
    )
    
}
export default Game;