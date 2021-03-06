
/* eslint-disable no-console */
import React,{ useState } from 'react';
import Cookies from 'js-cookie';
import { CurrentUser } from '../../stores/actions';



const Login = () => {
  const [identifier, setIdentifier] = useState('');

  const [password, setPassword] = useState('');

  const fetchFunction = (e) => {
    e.preventDefault();
    const data = {
      identifier,
      password,
    };

    fetch('http://localhost:1337/auth/local', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        Cookies.set('token', data.jwt);
        // eslint-disable-next-line no-console
        console.log(data);
        CurrentUser.id=data.user.id
        CurrentUser.username =data.user.name
        CurrentUser.email=data.user.email
        console.log(CurrentUser.email)
      });
  };

// test
  return (
    <div className="Login">
      <form>
        <input type="email" name="email" placeholder="email" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
        <input type="password" name="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" onClick={fetchFunction}>ça part</button>
      </form>
    </div>
  );
};

export default Login;