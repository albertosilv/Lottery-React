import React from 'react'
import {Container,Column} from './styles'
import Card from '../../Components/Card'
import Input from '../../Components/Input'
import Lottery from '../../Components/Lottery'
const Game:React.FC=()=>{
    function handle (element:string){
        console.log(element)
    }
    return(
        <Container>
            <Column>
                <Lottery/>
            </Column>
            <Column>
                <Card>
                    <Input placeholder="Email" onChange={handle}/>
                    <Input placeholder="Password" onChange={handle}/>
                </Card>
            </Column>
            
        </Container>
    )
    
}
export default Game;