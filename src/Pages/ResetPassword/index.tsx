import React from 'react'
import {Container,Column} from './styles'
import Card from '../../Components/Card'
import Input from '../../Components/Input'
import Lottery from '../../Components/Lottery'
import TitlePage from '../../Components/TitlePage'
import ButtonLink from '../../Components/ButtonLink'
const ResetPassword:React.FC=()=>{
    function handle (element:string){
        console.log(element)
    }
    return(
        <Container>
            <Column>
                <Lottery/>
            </Column>
            <Column>
                <TitlePage>Reset Password</TitlePage>
                <Card>
                    <Input placeholder="Email" onChange={handle}/>
                    <ButtonLink name='Send Link' direction={true} to='/game' color='#b5c401' width='35'heigth='35' fontSize='2em'/>
                </Card>
                <ButtonLink name='Back' direction={false} to='/' color='#707070' width='35'heigth='35' fontSize='2em'/>
            </Column>
            
        </Container>
    )
    
}
export default ResetPassword;