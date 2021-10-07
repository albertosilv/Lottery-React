import React,{useState} from 'react'
import {Container,Column,ErrorMessage} from './styles'
import Card from '../../Components/Card'
import Input from '../../Components/Input'
import Lottery from '../../Components/Lottery'
import TitlePage from '../../Components/TitlePage'
import ButtonLink from '../../Components/ButtonLink'
import {useHistory} from 'react-router-dom'

import { useSelector,useDispatch } from 'react-redux'
import api from '../../Services';
import {ErrorProps} from '../../Interface/Game'
import {resetPassword} from '../../Store/Reset.store'
import { AxiosResponse, AxiosError } from 'axios';

const ForgotPassword:React.FC=()=>{
    const [ email,setEmail] = useState<string>('')
    const[error,setError] = useState<ErrorProps>({
        activated:false,
        message:''
    })
    const history = useHistory()
    const dispatch = useDispatch()
    async function handleReset(){
        try{
            if(email?.trim().length==0){
                throw new Error('Preencham os dados corretamente');
            }
            const textEmail = /\S+@\S+\.\S+/
            if(!textEmail.test(email)){
                    throw new Error('Email invalido');
            }
            const response: any = (await api.post<AxiosResponse>('/password', {email})).data
            setError({
                message:'',
                activated:false
            })
            dispatch(resetPassword(response))
            history.push('/resetPassword')

        }catch (err) {
            const error: AxiosError = err
            const message = error.response?.data.Error || error.message
            setError({
                message:'Usuário não encontrado',
                activated:true
            })
        }
    }
    return(
        <Container>
            <Column>
                <Lottery/>
            </Column>
            <Column>
                <TitlePage style={{marginBottom:'15px', textAlign: 'center'}}>Reset Password</TitlePage>
                <Card>
                    <Input placeholder="Email" value={email}onChange={setEmail} type="text" />
                    <ErrorMessage style={{display:error.activated?'flex':'none'}}>{error.message}</ErrorMessage>
                    <ButtonLink name='Send Link' direction={true} click={()=>handleReset()} color='#b5c401' width='35'heigth='35' fontSize='2em'/>
                </Card>
                <ButtonLink name='Back' direction={false} click={()=>history.push('/')} color='#707070' width='35'heigth='35' fontSize='2em'/>
           
            </Column>
            
        </Container>
    )
    
}
export default ForgotPassword;