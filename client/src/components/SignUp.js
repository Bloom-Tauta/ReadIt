import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [created, setCreated] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function createUser(event) {
    event.preventDefault();
    event.target.reset();

    let user = {
      username,
      password,
    };

    fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ user }),
    })
      .then((r) => r.json())
      .then((response) => {
        if (response.status === 'created') {
          setCreated(true);
          setErrorMessage('');
        }
      })
      .catch((response) =>
        setErrorMessage(
          "Uh...Make sure your server is running!"
        )
      );
  }

  return (
<div className="container">
  {created ? (
    <Navigate to="/login" />
  ) : (
    <div className="form-wrap">
      <div className="error-msg">
        <p>{errorMessage}</p>
      </div>
      <form onSubmit={createUser}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="input-field"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input-field"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  )}
</div>

  );
}