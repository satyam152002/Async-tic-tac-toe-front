import Entry from './components/Entry/Entry';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function PublicRoute()
{
    return<>
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Entry/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='*' element={<h1>404</h1>}/>
        </Routes>
    </BrowserRouter>
    </>

}
export default PublicRoute;