import "./Login.css"
import {FaAngleLeft} from 'react-icons/fa'
import {useNavigate,Link} from 'react-router-dom';
import { useContext, useState } from "react";
import { AuthContext } from "../../App";
function Login()
{
    const {auth,setAuth}=useContext(AuthContext)
    const navigate=useNavigate()
    const [error,setError]=useState(false)
    const[username,setUsername]=useState("")
    const[password,setPassword]=useState("")
    return<>
    <div className="back-icon" onClick={()=>navigate('/')} >
        <FaAngleLeft size={30} />
    </div>
    <div className="heading">
        <span className="first">Login</span>
        <br></br>
        <span className="second">Please enter your <br/>details</span>
    </div>
    <form onSubmit={e=>handleSubmit(e)}>
        <span className="field-name" >Username</span>
        <br/>
        <input type="text" required value={username} onChange={e=>setUsername(e.target.value)}  
            placeholder="Type your username here"/>
        <span className="field-name" >Password</span>
        <br/>
        <input type="password" required value={password} onChange={e=>setPassword(e.target.value)}
         placeholder="Type your password here"/>
        <footer>
            <a className={error?"error":"error hide"}>Enter correct details.</a>
            <a className="info hide">Congratulations!!! Account created.</a>
            <button className="login" type="submit">Login</button>
        </footer>
    </form>
    </>
    async function handleSubmit(e)
    {
      e.preventDefault()
      const body={username:username,password:password}
      try
      {
        let response=await fetch("http://localhost:1000/auth/login",{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          mode:'cors',
          credentials:'include',
          body:JSON.stringify(body)
        })
        if(response.status===400)
        {
            setError(true)
            return
        }
        if(response.status===500)
            return alert("server error")
        if(response.status===200)
        {
            setError(false);
            setAuth(true)
            navigate('/')
            return
        }
      }
      catch(e)
      {
        console.log(e)
      }
  
    }
}
export default Login;