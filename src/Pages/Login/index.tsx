import React from 'react'
import { Container, Column, Reset, ResetContainer } from './styles'
import Card from '../../Components/Card'
import Input from '../../Components/Input'
import Lottery from '../../Components/Lottery'
import TitlePage from '../../Components/TitlePage'
import ButtonLink from '../../Components/ButtonLink'
import { useHistory } from 'react-router-dom'
const Login: React.FC = () => {
    const history = useHistory()
    function handle(element: string) {
        console.log(element)
    }
    return (
        <Container>
            <Column>
                <Lottery />
            </Column>
            <Column>
                <TitlePage>Login</TitlePage>
                <Card>
                    <Input placeholder="Email" onChange={handle} />
                    <Input placeholder="Password" onChange={handle} />
                    <ResetContainer>
                        <Reset onClick={(e) => history.push('/resetPassword')}>I forget my password</Reset>
                    </ResetContainer>
                    <ButtonLink name='Log in' direction={true} to='/recentGames' color='#b5c401' width='35'heigth='35' fontSize='2em'/>
                </Card>
                <ButtonLink name='Sign up' direction={true} to='/registration' color='#707070' width='35'heigth='35' fontSize='2em'/>
            </Column>

        </Container>
    )

}
export default Login;