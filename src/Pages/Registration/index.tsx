import React from 'react'
import {Container,Column} from './styles'
import Card from '../../Components/Card'
import Input from '../../Components/Input'
import Lottery from '../../Components/Lottery'
import TitlePage from '../../Components/TitlePage'
const Registration:React.FC=()=>{
    function handle (element:string){
        console.log(element)
    }
    return(
        <Container>
            <Column>
                <Lottery/>
            </Column>
            <Column>
                <TitlePage>Registration</TitlePage>
                <Card>
                    <Input placeholder="Name" onChange={handle}/>
                    <Input placeholder="Email" onChange={handle}/>
                    <Input placeholder="Password" onChange={handle}/>
                </Card>
            </Column>
            
        </Container>
    )
    
}
export default Registration;