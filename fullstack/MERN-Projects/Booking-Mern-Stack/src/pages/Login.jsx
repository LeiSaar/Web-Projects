import axios from 'axios';
import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({
        name: undefined,
        password: undefined,
    });

    const {user, loading, error, dispatch} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleChange = (e)=>{
       setCredentials ((prev)=> ({...prev, [e.target.id]:e.target.value}));
    }

    const handleClick = async (e) =>{
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const res = await axios.post("/api/auth/login", credentials);
            console.log("Response body:", res.data);
            dispatch({type: "LOGIN_SUCCESS", payload: res.data})
            navigate("/")
        } catch (error) {
            dispatch({type: "LOGIN_FAILURE", payload: error.response?.data || error.message})
        }
    }

  return (
    <div className='login'>
         <div className="lContainer">
            <input type="text" placeholder='username' id="name" onChange = {handleChange} className='lInput' />
            <input type="password" placeholder='password' id="password" onChange = {handleChange} className='lInput' />
            <button disabled = {loading} type='button' onClick = {handleClick} className="lButton">Login</button>
            {error && <span>{error.message || error}</span>}
         </div>
    </div>
  )
}

export default Login