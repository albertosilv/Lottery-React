import React from 'react'
import { Container, NumberContainer, TitleGame, Info, InfoContaier, Border } from './styles'
import { Item } from '../../Interface/Game'
const CardItems: React.FC<Item> = ({ numbers, data,type}) => {
    function sortedNumbers(a:string,b:string){
            if (parseInt(a)<parseInt(b))
                return -1;
            if ( parseInt(a)>parseInt(b))
                return 1;
            return 0;
    }
    return (
        <Container colorGame={type.color}>
            <Border colorGame={type.color} />
            <InfoContaier>
                <NumberContainer>{numbers}</NumberContainer>
                <Info>{data.getDate()>=10?data.getDate():'0'+data.getDate()}/{(data.getMonth())>=9?data.getMonth()+1:'0'+(data.getMonth()+1)}/{data.getFullYear()} - (R$: {type.price.toFixed(2)})</Info>
                <TitleGame colorGame={type.color}>{type.type}</TitleGame>
            </InfoContaier>
        </Container>
    )
}
export default CardItems