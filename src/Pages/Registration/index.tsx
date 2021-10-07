import React, { useState } from 'react'
import { Container, Column, ErrorMessage } from './styles'
import Card from '../../Components/Card'
import Input from '../../Components/Input'
import Lottery from '../../Components/Lottery'
import TitlePage from '../../Components/TitlePage'
import ButtonLink from '../../Components/ButtonLink'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { User, ErrorProps } from '../../Interface/Game'
import { userReducer } from '../../Store/User.store'
import api from '../../Services';
import { AxiosResponse, AxiosError } from 'axios';
const Registration: React.FC = () => {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [error, setError] = useState<ErrorProps>({
        activated: false,
        message: ''
    })
    const [errorEmail, setErrorEmail] = useState<ErrorProps>({
        activated: false,
        message: ''
    })
    const [errorName, setErrorName] = useState<ErrorProps>({
        activated: false,
        message: ''
    })
    const history = useHistory()
    const dispatch = useDispatch()
    function handleName(e: string) {
        if (!/[0-9]/.test(e)) {
            setName(e)
        }
    }
    function handlePassword(e: string) {
        if (e.indexOf(' ') == -1) {
            setPassword(e)
        }
    }
    function handlePasswordConfirm(e: string) {
        if (e.indexOf(' ') == -1) {
            setConfirmPassword(e)
        }
    }
    async function handleRegistration() {
        try {
            setErrorEmail({
                message: '',
                activated: false
            })
            setErrorName({
                message: '',
                activated: false
            })
            setError({
                message: '',
                activated: false
            })
            const data = {
                name:name,
                email:email,
                password:password,
                password_confirmation:confirmPassword
            }
            const response:any = (await  api.post<AxiosResponse>('/user',data)).data
            const user:User = {
                name:response?.user?.name,
                id:response?.user?.id,
                token:response?.token?.token,
                email:response?.user?.email,
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
                    
                    } else if(e.field=='name') {
                        setErrorName({
                            message: e.message,
                            activated: true
                        })
                    }else{
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
                <TitlePage style={{ marginBottom: '15px', textAlign: 'center' }}>Registration</TitlePage>
                <Card>
                    <Input placeholder="Name" value={name} onChange={handleName} type="text" />
                    <ErrorMessage style={{ display: errorName.activated ? 'flex' : 'none' }}>{errorName.message}</ErrorMessage>
                    <Input placeholder="Email" value={email} onChange={setEmail} type="text" />
                    <ErrorMessage style={{ display: errorEmail.activated ? 'flex' : 'none' }}>{errorEmail.message}</ErrorMessage>

                    <Input placeholder="Password" value={password} onChange={handlePassword} type="password" />
                    <Input placeholder="Confirm Password" value={confirmPassword} onChange={handlePasswordConfirm} type="password" />
                    <ErrorMessage style={{ display: error.activated ? 'flex' : 'none' }}>{error.message}</ErrorMessage>
                    <ButtonLink name='Register' direction={true} click={() => handleRegistration()} color='#b5c401' width='35' heigth='35' fontSize='2em' />
                </Card>
                <ButtonLink name='Back' direction={false} click={() => history.push('/')} color='#707070' width='35' heigth='35' fontSize='2em' />
            </Column>

        </Container>
    )

}
export default Registration;