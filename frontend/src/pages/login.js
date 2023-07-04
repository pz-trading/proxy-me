import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/user";

export default function Login(){
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { accountProfile, setAccountProfile } = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("/be-api/login/",{email, password})
        .then( (res) => {
            console.log(res.data);
            setAccountProfile({
                "email": res.data?.email,
                "access_level": res.data?.access_level,
                "is_logged_in": true,
                "initialize": true
            });
            navigate('/');

        }).catch(err => {
            console.log(err)
            // if('code' in err.response.data){
            //     switch (err.response.data.code){
            //         case 401:
            //             setErrorMessage(err.response.data.message)
            //             break;
            //         default:
            //             setErrorMessage("Something went wrong.");
            //     }
            // }
        });
    };

    useEffect(()=>{
        if(accountProfile.is_logged_in){
            navigate('/')
        }
    },[accountProfile]);

    return (
        <div className="__regis">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email :</label>
                    <span id="span-email">{errorMessage}</span>
                    <input type='text' onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div>
                    <label>Password :</label>
                    <span id="span-password">{errorMessage}</span>
                    <input type='password' onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}