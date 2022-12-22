import style from './NewGame.module.css'
import {FaAngleLeft, FaCircle, FaTimes} from 'react-icons/fa'
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GameState } from '../../util/GameConstant';
import { checkGameState } from '../../util/GameFunction';

function getGameState()
{
    return GameState.PLAYING;
}
function NewGame()
{
    const navigate=useNavigate()
    const[board,setBoard]=useState(Array(9).fill(0))
    const[turn,setTurn]=useState(1)
    const[gameState,setGameState]=useState(()=>getGameState())
    const params=useParams()
    useEffect(()=>{
        const id=params.id
        fetch(`http://localhost:1000/game/${id}`)
        .then(res=>res.json())
        .then(res=>{
            // setBoard(res.board)
        })
    },[])
    return<>
    <div className={style.container}>
        <div className={style.backIcon} onClick={()=>navigate('/')} >
            <FaAngleLeft size={30} />
        </div>
        <div className={style.titleContainer}>
            <div className={style.mainTitle}>
                Game with Tanmay
            </div>
            <div className={style.pieceTitle}>
                <span>Your piece</span>
                <div>
                    <FaTimes size={60} color={'#2C8DFF'}/>
                </div>
            </div>
            <div className={style.moveStatus}>
                {
                    turn===1?
                    "Your Move":
                    "Their Move"
                }
            </div>
        </div>
        <div className={style.Board}>
            <BoardCell cell={board[0]} index={0} handleClick={handleClick}/>
            <BoardCell cell={board[1]} index={1} handleClick={handleClick}/>
            <BoardCell cell={board[2]} index={2} handleClick={handleClick}/>

            <BoardCell cell={board[3]} index={3} handleClick={handleClick}/>
            <BoardCell cell={board[4]} index={4} handleClick={handleClick}/>
            <BoardCell cell={board[5]} index={5} handleClick={handleClick}/>

            <BoardCell cell={board[6]} index={6} handleClick={handleClick}/>
            <BoardCell cell={board[7]} index={7} handleClick={handleClick}/>
            <BoardCell cell={board[8]} index={8} handleClick={handleClick}/>

        </div>
        <BottomButton gameState={gameState} name="Surya"/>
    </div>
    </>
    function handleClick(index)
    {
        if(board[index]!==0) return

        let temp=new Array(...board)
        temp[index]=turn
        console.log(index)

        setBoard(temp)
        setTurn(prevTurn=>(prevTurn===1?2:1))
        console.log(board)
        // if(status.state===GameState.WON)
        // {
        //     alert("Player "+(status.player===1?"X":"O")+" Wins")
        // }
        // else if(status.state===GameState.DRAW)
        // {
        //     alert("DRAW Game")

        // }
    }
}

function BoardCell({cell,index,handleClick})
{
    return<>
    <div className={style.Cell} key={cell} onClick={()=>handleClick(index)}>
        {cell===1?<FaTimes  size={60} color={'#2C8DFF'}/>:null}
        {cell===2?<ICON_O />:null}
    </div>
    </>

}
function ICON_O()
{
    return <>
        <span className={style.O}>O</span>
    </>
}
function BottomButton({gameState,name})
{
    return<>
    {
        gameState===GameState.PLAYING?
        <button className={style.playButton}>Submit</button>:""
    }
    {
        gameState===GameState.WON||gameState===GameState.DRAW?
        <button className={style.wonButton}>Start another game</button>:""
    }
    {
        gameState===GameState.WAITING?
        <button className={style.waitingButton}>Waiting for {name}</button>:""
    }
    </>
}
export default NewGame