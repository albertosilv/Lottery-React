import React from 'react'
import {Container,ContainerButton,Label,LotteryText} from './styles'
const Lottery:React.FC = ()=>{
    return(
        <Container>
            <Label>The</Label>
            <Label>Greatest</Label>
            <Label>App</Label>
            <ContainerButton>for</ContainerButton>
            <LotteryText>Lottery</LotteryText>
        </Container>
    )
}
export default Lottery;