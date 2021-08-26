import React from 'react'
import { Container, Column, Title, Border, Link } from './styles'
import ButtonLink from '../ButtonLink'
const Header: React.FC = ({ }) => {
    return (
        <Container>
            <Column>
                <Title>TGL<Border />
                </Title>
            </Column>
            <Column>
                <Link>Account</Link>
                <ButtonLink name='Sair' direction={true} to='/' color='#707070' heigth='25' width='25' fontSize='1.2em' />
            </Column>
        </Container>
    )
}

export default Header