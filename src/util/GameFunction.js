import { GameState } from "./GameConstant"

function checkRow(board,player)
{
    for(let i=0;i<3;i++)
    {
        let flag=true
        for(let j=0;j<3;j++)
        {
            if(board[i][j]===player)
            {
                flag=false
                break
            }
        }
        if(flag)
            return GameState.WON;
    }
    return GameState.PLAYING;
}
function checkColumn(board,player)
{
    for(let i=0;i<3;i++)
    {
        let flag=true
        for(let j=0;j<3;j++)
        {
            if(board[j][i]===player)
            {
                flag=false
                break
            }
        }
        if(flag)
            return GameState.WON;
    }
    return GameState.PLAYING;

}
export function checkGameState(board)
{


}