import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          setError(data.error);
        } else {
             console.log(data)
          localStorage.setItem('token', data.token);
          navigate('/home');
          // Redirect to a protected route or update the UI
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setError('An error occurred. Please try again later.');
      });
  };

    return(
        <div>
            <form  onSubmit={handleSubmit} className="flex flex-col bg-sky-200 p-5 max-w-xl mx-auto">
            <label  htmlFor="username" className="form-label">Username</label>
            <input type="text" id="username" value={username} onChange={event => setUsername(event.target.value)} className="form-control px-3 py-1"  placeholder="Enter your username"/>
            

            <label  htmlFor="password"  className="form-label">Password</label>
            <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)}className="form-control px-3 py-1" placeholder="Enter your password"/>

            {error && <div>{error}</div>}
            <button className="bg-gray-700 w-max mx-auto py-2 px-4 my-2">Login</button>
            </form>
            
        </div>
    );
    }export default Login;