import React from 'react'
import { Container, Border, InfoContainer, NumberContainer, Info, TitleGame,Button} from './styles'
import Trash from '../../Icons/Trash'
import { Item } from '../../Interface/Game'
interface GameProps {
    item: Item,
    click: any
}
const GameCard: React.FC<GameProps> = ({ item, click }) => {
    return (
        <Container >
            <Button onClick={e=>click(item)}><Trash width='25' height='25' color='#ADC0C4'/></Button>
            <Border colorGame={item.type.color} />
            <InfoContainer>
                <NumberContainer>{item.numbers}</NumberContainer>
                <TitleGame colorGame={item.type.color}>{item.type.type}<Info>R$ {item.type.price.toFixed(2).replace(".", ",")}</Info>
                </TitleGame>
            </InfoContainer>
        </Container>
    )
}
export default GameCard