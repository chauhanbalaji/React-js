import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'



function Login() {
    const [usename, useState] = useState('');
    const [password, setPassword] = useState('');

    const {setUsername} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDfault()
        setUsername({username, password})

    }
  return (
    <div>
        <h2>
            Login
        </h2>
        <input type="text" 
         value={usename}
         onChange={(e) => setUsername(e.target.value) }
         placeholder='username'  />
         {"  "}
        <input type="password"
        value={password}
         onChange={(e) => setPassword(e.target.value) }
        placeholder='password'  />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login