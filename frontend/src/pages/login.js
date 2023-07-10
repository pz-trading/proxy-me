import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/user";

const ERR = {
    email: "",
    password: "",
    all: ""
};
export default function Login(){
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState(ERR);

    const { accountProfile, setAccountProfile } = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("/be-api/login/",{email, password})
        .then( (res) => {
            setAccountProfile({
                "email": res.data?.email,
                "access_level": res.data?.access_level,
                "is_logged_in": true,
                "initialize": true
            });
            navigate('/');

        }).catch(err => {
            let e_msg = { ...ERR };
            if ('errors' in err.response.data){
                for(const e in err.response.data.errors){
                    const errorObject = err.response.data.errors[e];
                    e_msg[errorObject.field] += errorObject.error_message + ". (" + "Error " + errorObject.error_code + ")" ;
                }
            }
            setErrorMessage(e_msg);
        });
    };

    useEffect(()=>{
        if(accountProfile.is_logged_in){
            navigate('/')
        }
    },[accountProfile]);
    const handleResetPass = () => {
        navigate("/reset-password")
    }
    return (
        <div className="__regis">
            <form onSubmit={handleSubmit}>
                <span id="span-email">{errorMessage.all}</span>
                <div>
                    <label>Email :</label>
                    <span id="span-email">{errorMessage.email}</span>
                    <input type='text' onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div>
                    <label>Password :</label>
                    <span id="span-password">{errorMessage.password}</span>
                    <input type='password' onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <div className="form-controls">
                    <button type="submit">Login</button>

                    <button type="button" onClick={handleResetPass}>Reset Password</button>
                </div>

            </form>
        </div>
    )
}