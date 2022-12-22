import style from './StartNewGame.module.css'
import {FaAngleLeft, FaCircle, FaTimes} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { SERVER_URL } from '../../util/config';
function StartNewGame()
{
    const navigate=useNavigate()
    const[email,setEmail]=useState("")
    return<>
    <div className={style.container}>
        <div className={style.backIcon} onClick={()=>navigate('/')} >
            <FaAngleLeft size={30} />
        </div>
        <div className={style.mainTitle}>
            Start a new game
        </div>
        <div className={style.tagTitle}>
            Whom do you want<br/> to play with?
        </div>
        <form className={style.Form} onSubmit={e=>handleSubmit(e)}>
            <span >Email</span>
            <input type={'email'} value={email} onChange={e=>setEmail(e.target.value)} 
                placeholder="Type their email here"  required/>
            <button className={style.submitButton} >Submit</button>
        </form>
    </div>
    </>
    async function handleSubmit(e)
    {
        e.preventDefault()
        if(email.trim().length===0) return

        setEmail(email.trim())

        try
        {
            let response=await fetch(`${SERVER_URL}/game`,{
                method:'POST',
                headers:{
                    'content-type':'application/json'
                },
                mode:'cors',
                credentials:'include',
                body:JSON.stringify({email:email})
            })
            console.log(response)
            if(response.status===201)
            {
                let game=await response.json()
                navigate(`/game/${game._id}`)
            }
            if(response.status===400)
            {
                let error=await response.text()
                alert(error)
            }
        }
        catch(e)
        {
            console.log(e)
        }

    }
}

export default StartNewGame