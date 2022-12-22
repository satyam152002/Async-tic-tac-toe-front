import { Link } from 'react-router-dom';
import  style from './CreateGame.module.css'

function CreateGame()
{
    return<>
    <div className={style.app}>
        <div className={style.title}>
            Your Games
        </div>
        <div className={style.centerText}>
            No Games<br/>Found
        </div>
        <Link to={'/startnewgame'} className={style.startGame}>
            Start a new game
        </Link>
    </div>
    </>
}

export default CreateGame;