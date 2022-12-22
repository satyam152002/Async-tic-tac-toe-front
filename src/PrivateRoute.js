import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CreateGame from './components/Game/CreateGame';
import Home from './components/Game/Home';
import NewGame from './components/Game/NewGame';
import StartNewGame from './components/Game/StartNewGame';

function PrivateRoute()
{
    return<>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/startnewgame' element={<StartNewGame/>}/>
            <Route path='/game/:id' element={<NewGame/>}/>
            <Route path='*' element={<h1>404</h1>}/>
        </Routes>
    </BrowserRouter>
    </>

}
export default PrivateRoute;