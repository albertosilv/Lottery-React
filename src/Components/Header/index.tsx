import React from 'react'
import { Container, Column, Title, Border, Link } from './styles'
import ButtonLink from '../ButtonLink'

import {  useDispatch } from 'react-redux'
import { User } from '../../Interface/Game'
import { useHistory } from 'react-router-dom'
import { userReducer } from '../../Store/User.store'
const Header: React.FC = ({ children }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    function handleLogout() {
        const user: User = {
            name: '',
            email: '',
            token: '',
            id: '',
        };
        dispatch(userReducer(user))
        history.push('/')
    }
    return (
        <Container>
            <Column>
                <Title>TGL<Border />
                </Title>
                {children}
            </Column>
            <Column>
                <Link onClick={()=>history.push('/account')}>Account</Link>
                <ButtonLink name='Sair' direction={true} click={() => handleLogout()} color='#707070' heigth='25' width='25' fontSize='1.2em' />
            </Column>
        </Container>
    )
}

export default Header