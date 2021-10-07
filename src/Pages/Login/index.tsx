import React, { useState } from 'react'
import { Container, Column, Reset, ResetContainer, ErrorMessage } from './styles'
import Card from '../../Components/Card'
import Input from '../../Components/Input'
import Lottery from '../../Components/Lottery'
import TitlePage from '../../Components/TitlePage'
import ButtonLink from '../../Components/ButtonLink'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { User } from '../../Interface/Game'
import { userReducer } from './../../Store/User.store'
import api from '../../Services';
import { AxiosResponse, AxiosError } from 'axios';
interface ErrorProps {
    activated: Boolean,
    message: string
}
const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<ErrorProps>({
        activated: false,
        message: ''
    })
    const [errorEmail, setErrorEmail] = useState<ErrorProps>({
        activated: false,
        message: ''
    })
    const history = useHistory()
    const dispatch = useDispatch()
    async function handleLogin() {
        try {
            const data = { email, password }
            setErrorEmail({
                message: '',
                activated: false
            })
            setError({
                message: '',
                activated: false
            })
            const response: any = (await api.post<AxiosResponse>('/login', data)).data
            const user: User = {
                name: response?.user?.name,
                id: response?.user?.id,
                token: response?.token?.token,
                email: response?.user?.email,
            }
            dispatch(userReducer(user))

            history.push('/RecentGames')


        } catch (err) {
            const error: AxiosError = err
            const message = error.response?.data.Error || error.message
            if (Array.isArray(message)) {
                message.forEach(e => {
                    if (e.field === 'email') {
                        setErrorEmail({
                            message: e.message,
                            activated: true
                        })
                    } else {
                        setError({
                            message: e.message,
                            activated: true
                        })
                    }
                })

            } else {
                setError({
                    message: message,
                    activated: true
                })
            }

        }

    }
    return (
        <Container>
            <Column>
                <Lottery />
            </Column>
            <Column>
                <TitlePage style={{ marginBottom: '15px', textAlign: 'center' }}>Login</TitlePage>
                <Card style={{heigth:'10vh'}}>
                    <Input placeholder="Email" value={email} onChange={setEmail} type="text" />
                    <ErrorMessage style={{ display: errorEmail.activated ? 'flex' : 'none' }}>{errorEmail.message}</ErrorMessage>
                    <Input placeholder="Password" value={password} onChange={setPassword} type="password" />
                    <ErrorMessage style={{ display: error.activated ? 'flex' : 'none' }}>{error.message}</ErrorMessage>
                    <ResetContainer>
                        <Reset onClick={(e) => history.push('/forgotPassword')}>I forget my password</Reset>
                    </ResetContainer>
                    <ButtonLink name='Log in' direction={true} click={() => handleLogin()} color='#b5c401' width='35' heigth='35' fontSize='2em' />
                </Card>
                <ButtonLink name='Sign up' direction={true} click={() => history.push('/Registration')} color='#707070' width='35' heigth='35' fontSize='2em' />
            </Column>

        </Container>
    )

}
export default Login;