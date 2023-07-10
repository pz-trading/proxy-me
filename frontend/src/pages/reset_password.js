import React, { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

const ERR = {
    email: "",
    password: "",
    password2: "",
    reset_password_code: "",
    all: ""
};
export default function ResetPassword(){
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [resetPasswordCode, setResetPasswordCode] = useState('');
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState(ERR);
    const { accountProfile } = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post("/be-api/reset-password/",{email, password, password2, resetPasswordCode})
        .then( (res) => {
            console.log(res.data);
            navigate('/login');

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

    return (
        <div className="__regis">
            <form onSubmit={handleSubmit}>
                <span id="span-email">{errorMessage.all}</span>
                <div>
                    <label>Email :</label>
                    <span id="span-email">{errorMessage.email}</span>
                    <input type='email' onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div>
                    <label>New Password :</label>
                    <span id="span-password">{errorMessage.password}</span>
                    <input type='password' onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                <div>
                    <label>Confirm Password :</label>
                    <span id="span-password">{errorMessage.password2}</span>
                    <input type='password' onChange={(event)=>setPassword2(event.target.value)}/>
                </div>
                <div>
                    <label>Security Code:</label>
                    <span id="span-email">{errorMessage.reset_password_code}</span>
                    <input type='text' onChange={(event)=>setResetPasswordCode(event.target.value)}/>
                </div>
                <div className="form-controls">
                    <button type="submit">Submit Reset Password</button>

                </div>

            </form>
        </div>
    )
}