import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { GameState } from '../../util/GameConstant';
import  style from './Home.module.css'

function Home()
{
    const[games,setGames]=useState([])
    useEffect(()=>{

        fetch('http://localhost:1000/game')
        .then(res=>res.json())
        .then(res=>
            {
                console.log("Response :"+res)
                setGames(res)
            })
        .catch(e=>console.log(e))
    },[])
    return<>
    <div className={style.app}>
        <div className={style.title}>
            Your Games
        </div>
        <Link to={'/startnewgame'} className={style.startGame}>
            <div>
                <FaPlus fontSize={25}/> 
            </div>
            <div>
                New Game
            </div>
        </Link>
        <div className={style.GameCardContainer}>
            {games.map((game,index)=>(
                <GameCard key={`GameUUID${game}/${index}`} name={game.currentTurn?.name} game={game}/>
                ))}

        </div>
    </div>
    </>
}
function GameCard(props)
{
    const navigate=useNavigate()
    return<>
    <div className={style.GameCard}>
        <div className={style.Header}>
            Game with {props?.game?.opponentUser?.name}
        </div>
        <div className={style.GameDetails}>
            You’ve made your move!
            <br/>
            Waiting for them.
        </div>
        <div className={style.UpdatedTime}>
            {new Date(props.game?.updatedAt).toUTCString()} 
        </div>
        <div className={style.GameButton} onClick={()=>handleClick()}>
            {props.game.state===GameState.PLAYING?"Play":"View"}
        </div>
    </div>
    </>
    function handleClick()
    {
        navigate(`/game/${props.game._id}`)
    }
}


export default Home;