import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const UserContext = createContext();
const Profile = {
    'email' : "",
    'access_level': 0,
    'is_logged_in': false,
    'initialize': false
};
export function UserContextProvider({ children }){
    const [accountProfile, setAccountProfile] = useState(Profile);

    useEffect(()=>{
        const defaultEmail = '';
        const defaultAccessLevel = 0;
        const defaultIsLoggedIn = false;
        axios.get("/be-api/verify-user-token/"
        ).then(res => {
            if ('data' in res && res.data !== null){
                setAccountProfile({
                    "email": res.data?.email,
                    "access_level": res.data?.access_level,
                    "is_logged_in": true,
                    "initialize" : true
                });

            }else{


                setAccountProfile((prevProfile) => ({
                    ...prevProfile,
                    email: prevProfile.email || defaultEmail,
                    access_level: prevProfile.access_level || defaultAccessLevel,
                    is_logged_in: prevProfile.is_logged_in || defaultIsLoggedIn,
                    initialize: true
                }));

            }

        }).catch((err)=>{
            console.log(err.response.status, err.response.data.messaage);
            setAccountProfile((prevProfile) => ({
                ...prevProfile,
                email: prevProfile.email || defaultEmail,
                access_level: prevProfile.access_level || defaultAccessLevel,
                is_logged_in: prevProfile.is_logged_in || defaultIsLoggedIn,
                initialize: true
            }));
        });

    },[]);

    const properties = {
        setAccountProfile,
        accountProfile
    }
    return (
        <UserContext.Provider value={properties}>
            {children}
        </UserContext.Provider>
    )
}