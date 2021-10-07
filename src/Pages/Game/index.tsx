import React, { useState, useEffect } from 'react'
import ButtonGame from '../../Components/ButtonGame';
import { types } from '../../games.json'
import Header from '../../Components/Header';
import TitlePage from '../../Components/TitlePage';
import CardContainer from '../../Components/Card';
import NumberButton from '../../Components/NumberButton';
import GameCard from '../../Components/GameCard';
import Cart from '../../Icons/Cart';
import RightIcon from '../../Icons/Right'

import {
    Container,
    Section,
    ContainerCard,
    ContainerGame,
    Text,
    Link,
    HeaderContainer,
    SubTitle,
    ButtonContainer,
    Info,
    NumberContainer,
    ButtonFuncContainer,
    GameContainer,
    AddButton,
    Button,
    ButtonSubmit
} from './styles'

import { Numbers, GameProps, Item } from '../../Interface/Game'
import { useSelector } from 'react-redux'
import { User } from '../../Interface/Game'
import { RootState } from '../../Store'
import { useHistory } from 'react-router-dom'
import api from '../../Services';
import { AxiosResponse, AxiosError} from 'axios';
import Axios from 'axios'

const Game: React.FC = () => {
    const user: User = useSelector((state: RootState) => state.user.user)
    const [games, setGames] = useState<GameProps[]>([])
    const [selectionGame, setSelectionGame] = useState<GameProps>({
        id: '0',
        type: '',
        description: '',
        range: 0,
        price: 0,
        "max-number": 0,
        color: '',
        "min-cart-value": 0,
        selected: true
    })
    const [numbers, setNumbers] = useState<Numbers[]>([])
    const [gameSelected, setGameSelected] = useState<Item[]>([])
    const [value, setValue] = useState<number>(0)
    const history = useHistory()
    useEffect(() => {
        (async () => {
            getGames()
        })()
    }, [])
    useEffect(() => {
        const num: Numbers[] = []
        for (let i = 1; i <= selectionGame.range; i++) {
            num.push({
                name: i < 10 ? '0' + i : i.toString(),
                selected: false

            })
        }
        setNumbers(num)
    }, [selectionGame])
    useEffect(() => {
        const newGames: GameProps[] = games.map(e => {
            if (e.type == selectionGame.type) {
                e.selected = true;
            } else {
                e.selected = false
            }
            return e;
        })
        setGames(newGames)
    }, [selectionGame])
    async function getGames() {
        try {
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            }
            const response: GameProps[] = (await api.get(`/game`, config)).data
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
            setSelectionGame(data[0])
        } catch (err) {
            const error: AxiosError = err
            console.log(error.message)
        }
    }
    function handleClick(e: GameProps) {
        setSelectionGame(e)
    }
    function handleClickNumber(e: Numbers) {
        const numbersCopy: Numbers[] = [...numbers]
        let numbersSelected = numbersCopy.filter(e => {
            return e.selected
        })
        if (numbersSelected.length < selectionGame['max-number'] || e.selected) {
            numbersCopy[parseInt(e.name) - 1].selected = !numbersCopy[parseInt(e.name) - 1].selected;
            setNumbers(numbersCopy)
        }

    }
    function handleClickCompleteGame() {
        const numbersCopy: Numbers[] = [...numbers]
        let numbersSelected = numbersCopy.filter(e => {
            return e.selected
        })
        if (numbersSelected.length == selectionGame['max-number']) {
            handleClickClearGame()
        }
        while (true) {
            const num = Math.round(Math.random() * 100)
            if (selectionGame.range > num) {
                if (!numbersCopy[num].selected) {
                    numbersCopy[num].selected = true;
                }
                numbersSelected = numbersCopy.filter(e => {
                    return e.selected
                })
                if (numbersSelected.length == selectionGame['max-number']) {
                    break;
                }
            }
        }
        setNumbers(numbersCopy)
    }
    function handleClickClearGame() {
        const numbersCopy: Numbers[] = [...numbers]
        numbersCopy.forEach(e => {
            e.selected = false;
        })
        setNumbers(numbersCopy)
    }

    function handleAddCart() {
        const numbersFilter: string[] = numbers.filter(e => {
            return e.selected
        }).map(e => {
            return e.name
        })
        if (numbersFilter.length == selectionGame['max-number']) {
            const cart: Item = {
                id: gameSelected.length,
                numbers: numbersFilter.toString(),
                data: new Date(),
                type: selectionGame
            }
            setGameSelected([...gameSelected, cart])
            handleClickClearGame()
            const price: number = value + selectionGame.price
            setValue(price)
        }
    }
    function handleRemoveCart(item: Item) {
        const gameSelectedCopy: Item[] = gameSelected.filter(e => {
            return e.id != item.id;
        })
        setGameSelected(gameSelectedCopy)
        const price: number = value - item.type.price
        setValue(price)
    }
    async function handleSaveMe() {
        try {
            const data= gameSelected.map(e => {

                const config = {
                    headers: {
                        'Authorization': 'Bearer ' + user.token
                    }
                }
                const data = {
                    user_id: user.id,
                    game_id: e.type.id,
                    numbers: e.numbers

                }

                return  api.post<AxiosResponse>('/bet', data, config)
            })
            await Axios.all<AxiosResponse>(data).then(Axios.spread((data)=> {
                history.push('/RecentGames')
              }));
            console.log(gameSelected)
        } catch (err) {
            const error: AxiosError = err
            console.log(error.message)
        }
    }
    return (
        <Container>
            <Header><Link onClick={() => history.push('/RecentGames')}>Home</Link></Header>
            <Section>
                <ContainerGame>
                    <HeaderContainer>
                        <TitlePage style={{ fontSize: '1.5em', textTransform: 'uppercase' }}>NEW BET<SubTitle> FOR {selectionGame.type}</SubTitle></TitlePage>
                        <Text>Choose Game</Text>
                        <GameContainer>
                            {games.map((e) => {
                                return <ButtonGame click={handleClick} game={e} />
                            })}
                        </GameContainer>
                        <Text>Fill your bet</Text>
                        <Info>{selectionGame.description}</Info>
                    </HeaderContainer>
                    <NumberContainer>
                        {numbers.map(e => (
                            <NumberButton number={e} click={handleClickNumber} color={selectionGame.color} />
                        ))}
                    </NumberContainer>
                    <ButtonContainer>
                        <ButtonFuncContainer>
                            <Button onClick={e => handleClickCompleteGame()}> Complete Game</Button>
                            <Button onClick={e => handleClickClearGame()}>Clear Game</Button>
                        </ButtonFuncContainer>
                        <AddButton onClick={e => handleAddCart()}><Cart width="25" height="25" color="#fff" /><Text style={{ color: '#fff', marginLeft: '2vw', padding: '1px' }}>Add to Car</Text></AddButton>
                    </ButtonContainer>
                </ContainerGame>
                <ContainerCard>
                    <CardContainer style={{ padding: gameSelected.length == 0 ? '' : '40px 0px 0px 0px' }} >
                        {gameSelected.length == 0 && <Cart width="35" height="35" color="#27C383" />}
                        {gameSelected.length != 0 && gameSelected.map(e => (
                            <GameCard item={e} click={handleRemoveCart} />
                        ))}
                        {gameSelected.length != 0 && <TitlePage style={{ fontSize: '1.3em', textTransform: 'uppercase', padding: '10px' }}>Cart<SubTitle> Total {value.toFixed(2)}</SubTitle></TitlePage>}
                        {gameSelected.length != 0 && <ButtonSubmit onClick={() => handleSaveMe()}>Save me <RightIcon color="#27C383" width="25" height="25" /></ButtonSubmit>}
                    </CardContainer>
                </ContainerCard>
            </Section>
        </Container>
    )

}
export default Game;