import React, { useState, useEffect } from 'react'
import ButtonGame from '../../Components/ButtonGame';
import Header from '../../Components/Header';
import ButtonLink from '../../Components/ButtonLink';
import TitlePage from '../../Components/TitlePage';
import CardItems from '../../Components/CardItems';
import { Container, Section, Text, HeaderContainer, ButtonContainer, CardsContainer, Wrapper } from './styles'
import { Item, GameProps } from '../../Interface/Game'
import { useHistory } from 'react-router-dom'

import { useSelector } from 'react-redux'
import { User } from '../../Interface/Game'
import { RootState } from '../../Store'
import { AxiosResponse, AxiosError } from 'axios';

import api from '../../Services';

const RecentGames: React.FC = () => {
    const user: User = useSelector((state: RootState) => state.user.user)
    const [games, setGames] = useState<GameProps[]>([])
    const [selectionGame, setSelectionGame] = useState<GameProps>({
        id:'0',
        type: '',
        description: '',
        range: 0,
        price: 0,
        "max-number": 0,
        color: '',
        "min-cart-value": 0,
        selected: true
    })
    const[gameSelections,setGamesSelections] =useState<Item[]>([])
    const history = useHistory()
    const [bets, setBets] = useState<Item[]>([])
    useEffect(() => {
        (async () => {
            getGames()
            getBets()
        })()
    }, [])
    useEffect(()=>{
        const newGames:GameProps[] = games.map(e=>{
            if(e.type==selectionGame.type){
                e.selected=true;
            }else{
                e.selected=false
            }
            return e;
        })
        setGames(newGames)
    },[selectionGame])
    async function getGames() {
        try {
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            }
            const response:GameProps[] = (await api.get(`/game`, config)).data
            const data: GameProps[] = response.map(e => {
                return {
                    color: e.color,
                    description: e.description,
                    id: e.id,
                    'max-number': e['max-number'],
                    'min-cart-value': e['min-cart-value'],
                    price: e.price,
                    range: e.range,
                    type: e.type,
                    selected: false
                }
            })
            setGames(data)
        } catch (err) {
            const error: AxiosError = err
            console.log(error.message)
        }
    }
    async function getBets() {
        try {
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            }
            const response: any[] = (await api.get<AxiosResponse[]>(`/bet?id=${user.id}`, config)).data
            const dataFilter:any[] = response.filter(e=>{
                return e.game!=null
            })
            const data: Item[] = dataFilter.map(e => {
                return {
                    id:e.id,
                    numbers:e.numbers,
                    data:new Date(e.created_at),
                    type:{
                        color: e.game.color,
                        description: e.game.description,
                        id: e.game.id,
                        'max-number': e.game['max-number'],
                        'min-cart-value': e.game['min-cart-value'],
                        price: e.game.price,
                        range: e.game.range,
                        type: e.game.type,
                        selected: false
                    }
                }
            })
            setGamesSelections(data.sort(sorteItems))
            setBets(data.sort(sorteItems))
        } catch (err) {
            const error: AxiosError = err
            console.log(error.message)
        }

    }
    function sorteItems(a: Item, b: Item) {
        if (a.data > b.data)
            return -1;
        if (a.data < b.data)
            return 1;
        return 0;
    }
    function handleFilter(game: GameProps) {
        if(game.type==selectionGame.type && selectionGame.selected){
            setGamesSelections(bets.sort(sorteItems))
            setSelectionGame({
                id:'0',
                type: '',
                description: '',
                range: 0,
                price: 0,
                "max-number": 0,
                color: '',
                "min-cart-value": 0,
                selected: true
            })
        }else{
            const gamesFilter = bets.filter(e=>{
                return e.type.type==game.type
            })
            setGamesSelections(gamesFilter.sort(sorteItems))
            setSelectionGame({...game,selected:true})
        } 

    }
    return (
        <Container>
            <Header />
            <Section>
                <HeaderContainer>
                    <Wrapper>
                        <TitlePage style={{ fontSize: '1.5em', textTransform: 'uppercase', textAlign: 'center', width: '50%' }}>Recent Games</TitlePage>
                        <ButtonContainer>
                            <Text>Filters</Text>
                            {games.map((e) => {
                                return <ButtonGame click={handleFilter} game={e} />
                            })}
                        </ButtonContainer>
                    </Wrapper>
                    <ButtonLink name='New Bet' direction={true} click={() => history.push('/game')} color='#b5c401' width='25' heigth='25' fontSize='1.2em' />
                </HeaderContainer>

                <CardsContainer>
                        {gameSelections.map(e=>(
                            <CardItems id={e.id} numbers={e.numbers} data={e.data} type={e.type}/>
                        ))}
                </CardsContainer>

            </Section>
        </Container>
    )

}
export default RecentGames;