import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup  } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import auth from '../config/firebase';

const Signup = () => {
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignup = () => {
        console.log("Name: ", name);
        console.log("Username: ", username);
        console.log("Email: ", email);
        console.log("Password: ", password);
        navigate('/login'); 

        let userObj = {
            name,
            username,
            email,
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("userCredential", userCredential)
            localStorage.setItem("UserData", JSON.stringify(userObj))
          })
          .catch((err) => {
            console.log("err", err)
          });

          
        }
        const handlegoogle = () => {
          const provider = new GoogleAuthProvider();

          signInWithPopup(auth, provider)
          .then((result) => {
              console.log("result", result)
          }).catch((error) => {
              console.log("error", error)
          });
        }

    return (
        <div>
            <h1>Sign Up Form</h1>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Name'/> <br /><br />
            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder='Enter Username'/><br /><br />
            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Email'/><br /><br />
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Enter Password'/><br /><br />
            <button onClick={handleSignup}>Sign Up</button>
            <button onClick={handlegoogle}>Sign Up with google</button>

        </div>
    )
}

export default Signup;