import React from 'react'
import { useNavigate } from 'react-router-dom'
function Login({action:{login, change}}) {
    const navigate = useNavigate()
    return ( 
        <>
        <h1> Login Page </h1>
        <div className="Login">
            <div className="form">
                <form onSubmit={(e)=>{login(e);navigate('/',{replace:true})}} >
                    <label>
                        Username:
                        <input onChange={change} name='username' type='text' placeholder='username' required/>
                    </label>
                    <label>
                        Password:
                        <input onChange={change} name='password' type='password' placeholder='username' required />
                    </label>
                   <button type='submit'>Login</button>
                </form>
            </div>
        </div>
        </>
    
     );
}

export default Login;