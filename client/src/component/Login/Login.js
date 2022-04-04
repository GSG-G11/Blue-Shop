import React from 'react'

function Login({action:{login, change}}) {
    return ( 
        <>
        <h1> Login Page </h1>
        <div className="Login">
            <div className="form">
                <form onSubmit={login}>
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