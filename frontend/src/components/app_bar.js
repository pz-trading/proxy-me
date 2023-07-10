import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import axios from 'axios';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/user';

export default function ButtonAppBar() {
    const [state, setState] = useState(false);
    const { accountProfile, setAccountProfile } = useContext(UserContext);
    const location = useLocation();
    const navigate = useNavigate();

    let title = location.pathname.replace(/\//g, '');
    title = title === "" ? "ProxyMe" : title;
    let camel_title = title.charAt(0).toUpperCase() + title.slice(1);

    const logout = () => {
        axios.get("/be-api/logout/"
        ).then(res => {

            setAccountProfile({
                "email": "",
                "access_level": 0,
                "is_logged_in": false
            });
            navigate("/login")

        }).catch(err => {
            console.log('logout error: ', err.response);
        });
    }
    const toggleDrawer = (open) => (event) => {
        if ( event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState(open);
    };

    const list = () => {
       return (
           <List sx={{ width: 200 }}>
                <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Proxy" />
                </ListItem>
                <ListItem button component={Link} to="/groups" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Groups" />
                </ListItem>
                <ListItem button component={Link} to="/members" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Members" />
                </ListItem>
                <ListItem button component={Link} to="/contacts" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Contacts" />
                </ListItem>
            </List>
        );
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={toggleDrawer(true)} >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        onClose={toggleDrawer(false)}
                        open={state} >
                        {list()}
                    </Drawer>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {camel_title} Page
                    </Typography>
                    {accountProfile.is_logged_in ? (
                    <Button color="inherit" onClick={() => logout() }>Logout</Button>
                    ) : (
                    <Button color="inherit" onClick={() => navigate('/login')}>Signin</Button>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}