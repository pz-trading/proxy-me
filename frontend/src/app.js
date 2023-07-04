import React, { useContext } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserContextProvider } from './context/user';

// Import components for each page
import Layout from './pages/layout';

import Login from './pages/login';
import Groups from './pages/groups';
import Members from './pages/members';
import Contacts from './pages/contacts';
import Proxy from './pages/proxy';

const NotFound = () => {
    <h1>Page Not Found</h1>
}
function App(){
    return (
        <UserContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Proxy />} />
                        <Route path="/groups/" element={<Groups />} />
                        <Route path="/members/" element={<Members />} />
                        <Route path="/contacts/" element={<Contacts />} />

                        <Route path="/login" element={<Login />} />
                        <Route component={NotFound} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserContextProvider>
    );
}

const el = document.getElementById('root');
const root = createRoot(el);
root.render(<App />);