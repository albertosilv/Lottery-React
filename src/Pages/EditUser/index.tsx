import React, { useState } from 'react'
import Header from '../../Components/Header';
import TitlePage from '../../Components/TitlePage';
import { userReducer } from '../../Store/User.store'

import {
    Container,
    Section,
    Link,
    AccountContainer,
    HeaderContainer,
    FormContainer,
    Button,
    Message
} from './styles'

import { useSelector, useDispatch } from 'react-redux'
import { User, ErrorProps } from '../../Interface/Game'
import { RootState } from '../../Store'
import { useHistory } from 'react-router-dom'

import { AxiosResponse, AxiosError } from 'axios';
import Input from '../../Components/Input'
import api from '../../Services';
const Account: React.FC = () => {
    const user: User = useSelector((state: RootState) => state.user.user)
    const [name, setName] = useState<string>(user.name)
    const [email, setEmail] = useState<string>(user.email)
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [message, setMessage] = useState<ErrorProps>({
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
   
    async function handleAccount() {
        try {
            setErrorEmail({
                message: '',
                activated: false
            })
            setErrorName({
                message: '',
                activated: false
            })
            setMessage({
                message: '',
                activated: false
            })
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            }
            const response:any = (await  api.put<AxiosResponse>(`/update/${user.id}`,{
                name:name,
                email:email,
            },config)).data
            const data:User = {
                name:name,
                id:user.id,
                token:user.token,
                email:email,
            }
            dispatch(userReducer(data))
            setMessage({
                message: 'Dados modificados com sucesso',
                activated: true
            })
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
                        setMessage({
                            message: e.message,
                            activated: true
                        })
                    }
                })

            } else {
                setMessage({
                    message: message,
                    activated: true
                })
            }
        }
    }
    return (
        <Container>
            <Header><Link onClick={() => history.push('/RecentGames')}>Home</Link></Header>
            <Section>
                <AccountContainer>
                    <HeaderContainer>
                        <TitlePage style={{ fontSize: '1.5em', textTransform: 'uppercase' }}>Account</TitlePage>
                    </HeaderContainer>
                    <FormContainer>
                        <Input placeholder="Nome" value={name} onChange={handleName} type="text" />
                        <Message style={{ display: errorName.activated ? 'flex' : 'none' }}>{errorName.message}</Message>
                        <Input placeholder="Email" value={email} onChange={setEmail} type="text" />
                        <Message style={{ display: errorEmail.activated ? 'flex' : 'none' }}>{errorEmail.message}</Message>
                        <Button onClick={() => handleAccount()}> Salvar</Button>
                        <Message style={{ display: message.activated ? 'flex' : 'none' }}>{message.message}</Message>
                    </FormContainer>
                </AccountContainer>
            </Section>
        </Container>
    )
}
export default Account;