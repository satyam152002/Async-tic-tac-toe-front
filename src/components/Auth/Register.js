import "./Register.css"
import {FaAngleLeft} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom';
import {  useState } from "react";
import { SERVER_URL } from "../../util/config";
function Register() {
  const navigate=useNavigate()
  const [error,setError]=useState(false)
  const [success,setSuccess]=useState(false)
  const [errorMessage,setErrorMessage]=useState("")
  const [name,setName]=useState("")
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")


  return <>
    <div className="back-icon" onClick={()=>navigate('/')} >
        <FaAngleLeft size={30} />
    </div>
    <div className="heading">
        <span className="first">Create account</span>
        <br></br>
        <span className="second">Let’s get to know you better!</span>
    </div>
    <form onSubmit={e=>handleSubmit(e)}>
        <span className="field-name" >Your name</span>
        <br></br>
        <input value={name}  type="text"  onChange={e=>setName(e.target.value)}
          required placeholder="Type your name here">
        </input>
        <span className="field-name" >Username</span>
        <br></br>
        <input type="text" onChange={e=>setUsername(e.target.value)} 
          required placeholder="Type your username here">
        </input>
        <span className="field-name" >Email</span>
        <br></br>
        <input type="email" onChange={e=>setEmail(e.target.value)}
         required placeholder="Type your email here">
        </input>
        <span className="field-name" >Password</span>
        <br></br>
        <input type="password" onChange={e=>setPassword(e.target.value)}
          required placeholder="Type your password here">
        </input>
        <footer>
            <a className={error?"error":"error hide"}>{errorMessage}</a>
            <a className={success?"info":"info hide"}>Congratulations!!! Account created.</a>
            <input className={success?"register disable":"register"}
              value="Register" disabled={success} type={"submit"} />
        </footer>
    </form>
  </>

  async function handleSubmit(e)
  {
    e.preventDefault()
    const body={name:name,username:username,email:email,password:password}
    
    try
    {
      let response=await fetch(`${SERVER_URL}/auth/register`,{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        mode:'cors',

        body:JSON.stringify(body)
      })
      let responseText=await response.text()
      if(response.status===400)
      {
        setError(true)
        setErrorMessage(responseText)
        return
      }
      if(response.status===201)
      {
        setError(false)
        setSuccess(true)
        return
      }
      if(response.status===500) return alert("Server Error")

    }
    catch(e)
    {
      console.log(e)
    }

  }
}
export default Register;