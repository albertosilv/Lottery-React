import React from 'react'
import { Card, Container } from './styles'
const CardContainer: React.FC = ({ children }) => {
    return (
        <Container>
            <Card>{children}</Card>
        </Container>
    )
}
export default CardContainer;