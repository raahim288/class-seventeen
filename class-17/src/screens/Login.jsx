import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
// import auth from '../config/firebase';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Email: ", email);
        console.log("Password: ", password);

    signInWithEmailAndPassword(auth, email, password)
    .then((res) => {
        console.log("res", res)
  })
  .catch((error) => {
        console.log("error", error)
  });

    }

    return (
        <div>
            <h1>Login Form</h1>
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Email'/><br /><br />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password'/><br /><br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Signup