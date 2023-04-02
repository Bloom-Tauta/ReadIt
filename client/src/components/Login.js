import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css'


export default function Login({ setCurrentUser }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    event.target.reset();

    const user = { username, password };

    fetch('/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        localStorage.token = response.jwt;
        setCurrentUser(response.user);
      });
  }

  return (
<div className="login-form">
  <form onSubmit={handleLogin}>
    <div className="form-group">
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="form-control"
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div className="form-group">
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="form-control"
        onChange={(e) => setPassword(e.target.value)}
      />
        </div>
          <button type="submit" className="btn-submit">Login</button>       
  </form>
</div>

  );
}