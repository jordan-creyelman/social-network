import React, { useState } from 'react';
import Cookies from 'js-cookie';

const Register = () => {  

const [userName, setUserName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  
const data = {

username: userName,
email: email,

password: password

  

};

  

const registerFetch = () => {

  

fetch('http://localhost:1337/auth/local/register', {

  

method: 'post',

  

headers: {

  

'Content-Type': 'application/json'

  

},

  

body: JSON.stringify(data)

  

})

  

.then((response) => response.json())

  

.then((response) => {

  

console.log(response.jwt)

  

Cookies.set('token', response.jwt);

  

})

  

  

}

  

  

return (

  

<div>

<form action="post">

<label htmlFor="input-username-register">Username</label>

<input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} id='input-username-register' />

<label htmlFor="input-email-register">Email</label>

<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} id='input-email-register' />

<label htmlFor="input-password-register">Password</label>

<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id='input-password-register'/>

<button type="button" onClick={() => registerFetch()}>Register</button>

</form>

</div>

  

);

  

};

  

  

export default Register;