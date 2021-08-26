import React,{useState} from 'react'
import ButtonGame from '../../Components/ButtonGame'; 
import regras from '../../games.json'
import Header from '../../Components/Header';
import {Container} from './styles'
const RecentGames:React.FC=()=>{
    const [games,setGames] = useState(regras.types)
    function handleClick(){
        console.log('hi')
    }
    return(
        <Container>
        <Header/>
       <ButtonGame color='#fff' click={handleClick} backgroundColor={games[0].color} name='text' borderColor={games[0].color}/>
       </Container>
    )
    
}
export default RecentGames;