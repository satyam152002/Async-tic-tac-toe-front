import "./Entry.css"
import {Link} from 'react-router-dom'
function Entry()
{
    return<>
    <div className="container">
        <div className="text-wrapper">
            <span className="async" >async</span>
            <span className="game-name">tic tac <br/>toe</span>
        </div>
        <div className="auth-button">
            <Link  className="login" to={'/login'}>Login</Link>
            <Link  className="register" to={'register'}>Register</Link>
        </div>
    </div>
    </>
}
export default Entry;