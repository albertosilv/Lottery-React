import React,{useState} from 'react'
import {Container,Column,ErrorMessage} from './styles'
import Card from '../../Components/Card'
import Input from '../../Components/Input'
import Lottery from '../../Components/Lottery'
import TitlePage from '../../Components/TitlePage'
import ButtonLink from '../../Components/ButtonLink'
import {useHistory} from 'react-router-dom'

import { useDispatch } from 'react-redux'
import {ErrorProps} from '../../Interface/Game'
import api from '../../Services';
import { AxiosResponse, AxiosError } from 'axios';
const ResetPassword:React.FC=()=>{
    const [ token,setToken] = useState<string>('')
    const [ password,setPassword] = useState<string>('')
    const [ confirmPassword,setConfirmPassword] = useState<string>('')
    const [reset,setReset] = useState<Boolean>(false)
    const[error,setError] = useState<ErrorProps>({
        activated:false,
        message:''
    })
    const history = useHistory()
    const dispatch = useDispatch()
    async function handleReset (){
        try{
            setError({
                message:'',
                activated:false
            })
            if(password?.trim().length==0 || confirmPassword?.trim().length==0){
                throw new Error('Preencham os dados corretamente');
            }
            if(password!=confirmPassword){
                throw new Error('Senhas não compativeis');
            }
            if(password.length<6 || password.length>15){
                throw new Error('A senha devera ter entre 6 a 15 caracteres');
            }
            const response:any = (await  api.put<AxiosResponse>('/password',{
                token:token,
                password:password,
                password_confirmation:confirmPassword
            })).data
            setReset(true)
            const erro:ErrorProps={
                message:'Senha modificada',
                activated:true
            }
            setError(erro)
        }catch (err) {
            const error: AxiosError = err
            const message = error.response?.data.Error || error.message
            const erro:ErrorProps={
                message,
                activated:true
            }
            setError(erro)
        }
        
    }
    return(
        <Container>
            <Column>
                <Lottery/>
            </Column>
            {!reset &&
            <Column>
                <TitlePage style={{marginBottom:'15px', textAlign: 'center'}}>Reset Password</TitlePage>
                 <Card>
                   <Input placeholder="Token" value={token} onChange={setToken} type="text" />
                    <Input placeholder="new Password" value={password}onChange={setPassword} type="password" />
                    <Input placeholder="Confirm Password" value={confirmPassword}onChange={setConfirmPassword} type="password" />
                    <ErrorMessage style={{display:error.activated?'flex':'none'}}>{error.message}</ErrorMessage>
                    <ButtonLink name='Reset' direction={true} click={()=>handleReset()} color='#b5c401' width='35'heigth='35' fontSize='2em'/>
                </Card> 
                <ButtonLink name='Back' direction={false} click={()=>history.push('/')} color='#707070' width='35'heigth='35' fontSize='2em'/>
            </Column>}
            {reset &&
            <Column>
                <TitlePage style={{marginBottom:'15px', textAlign: 'center'}}>Reset Password</TitlePage>
                 <Card>
                    <ErrorMessage style={{display:error.activated?'flex':'none',fontSize:'1.2em'}}>{error.message}</ErrorMessage>
                </Card> 
                <ButtonLink name='Login' direction={false} click={()=>history.push('/')} color='#707070' width='35'heigth='35' fontSize='2em'/>
            </Column>}
                
            
        </Container>
    )
    
}
export default ResetPassword;