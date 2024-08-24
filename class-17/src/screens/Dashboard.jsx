import React, { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"; 
import { database } from '../config/firebase';

const Dashboard = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])
    const [refresh, setRefresh] = useState(false)

    const addData = async () => {
        try {
            console.log(name, email, password)
            
            let userObj = {
                name,
                email,
                password,
            };
            const docRef = await addDoc(collection(database, "users"), userObj)
            setRefresh(!refresh); 
        } catch (error) {
            console.log("error", error)
        }
    }

    const updateData = async (user) => {
        try {
            const newName = prompt("Enter new name:");
            const newEmail = prompt("Enter new email:");
            const newPassword = prompt("Enter new password:");

            const userRef = doc(database, "users", user.id);
            await updateDoc(userRef, {
                name: newName,
                email: newEmail,
                password: newPassword
            });
            setRefresh(!refresh);
        } catch (error) {
            console.log("error", error);
        }
    }

    const deleteData = async (user) => {
        try {
            const userRef = doc(database, "users", user.id);
            await deleteDoc(userRef);
            setRefresh(!refresh);
        } catch (error) {
            console.log("error", error);
        }
    }

    const getData = async () => {
        try {
            const querySnapshot = await getDocs(collection(database, "users"));
            const usersData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setUsers(usersData);
        } catch (error) {
            console.log("error", error);
        }
    }
    

    useEffect(() => {
        getData();
    }, [refresh]);

  return (
    <div>
        <h1>Dashboard Page</h1>

        <input onChange={(e) => setName(e.target.value)} type="text" placeholder='enter username'/>
        <br /><br />
        <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='enter email'/>
        <br /><br />
        <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='enter password'/>
        <br /><br />
        <button onClick={addData}>Add Data</button>
        <br /><br />
        <h2>Users:</h2>
        <ul>
            {users.map((user, i) => (
                <li key={i}> 
                    username = {user.name}  <br /> 
                    user email = {user.email} 
                    <button onClick={() => updateData(user)}>Update</button> 
                    <button onClick={() => deleteData(user)}>Delete</button> 
                    <hr /> 
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Dashboard;