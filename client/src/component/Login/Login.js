import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./login.css"
function Login({action:{login, change}}) {
    const navigate = useNavigate()
    return ( 
        <>
       
        
            <div className="login-container">
                <form className="login-form" onSubmit={(e)=>{login(e);navigate('/',{replace:true})}} >
                    <label>
                        Username:
                    </label>
                        <input onChange={change} name='username' type='text' placeholder='username' required/>
                    <label>
                        Password:
                    </label>
                        <input onChange={change} name='password' type='password' placeholder='password' required />
                     
                   
                   <div className='login-btn-div'><button className='login-btn' type='submit'>Login</button></div>
                </form>
            </div>
      
        </>
    
     );
}

export default Login;