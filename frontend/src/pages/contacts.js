import React, { useEffect, useContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";
import axios from "axios";

import EditIcon from '@mui/icons-material/Edit';

import {
    Container, Grid, IconButton, styled,
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, Button
} from "@mui/material";

import ContactsForm from "./contacts_form";

const StyledTableContainer = styled(TableContainer)({
    width : '100%',
    '& .sCell': {
        width: '0 auto'
    }
});
function Contacts(){
    const [rowData, setRowData] = useState({});
    const [dialogOpen, setDialogOpen] = useState(false);
    const [data, setData] = useState([]);
    const [membersList, setMembersList] = useState([]);
    const { accountProfile, setAccountProfile } = useContext(UserContext);
    const [forUpdate, setForUpdate] = useState(false);
    const [queryFlag, setQueryFlag] = useState(false);

    const navigate = useNavigate();
    useEffect(()=>{
        if(accountProfile.initialize){
            if(!accountProfile.is_logged_in){
                navigate("/login");
            }
        }
    },[accountProfile])
    useEffect(()=>{
        if ( accountProfile.initialize && accountProfile.is_logged_in){
            axios.get("/be-api/get-contacts/", {withCredentials: true})
            .then( (res) => {
                setData(res.data.rows);
            }).catch( (err) => {
                console.log(err.response);
            });

            axios.get("/be-api/get-member/")
            .then( (res) => {
                setMembersList(res.data.rows);
            });
        }

    },[accountProfile, queryFlag]);
    const handleFormOpen = (data, onUpdate = false) => {
        setForUpdate(onUpdate);
        setRowData(data);
        setDialogOpen(true);
    };
    const handleFormClose = () => {
        setDialogOpen(false);
    };

    const handleFormSave = (data, handleErrorOnSave) => {
        data['for_update'] = forUpdate;
        axios.post("/be-api/save-contacts/", data).then((res) => {
            setDialogOpen(false);
            setQueryFlag(!queryFlag);

        }).catch((err) =>{
            if(err.response.status === 401){
                setAccountProfile({
                    "email": "",
                    "access_level": 0,
                    "is_logged_in": false,
                    "initialize" : true
                });
                navigate("/login");
            }
            console.log("Error: ", err.response.data)
            handleErrorOnSave(err.response.data.errors);
        });

    };

    const handleFormDelete = (data, handleErrorOnSave) => {
        axios.post("/be-api/delete-contacts/", data
        ).then((res) => {
            setDialogOpen(false);
            setQueryFlag(!queryFlag);

        }).catch((err) =>{
            if(err.response.status === 401){
                setAccountProfile({
                    "email": "",
                    "access_level": 0,
                    "is_logged_in": false,
                    "initialize" : true
                });
                navigate("/login");
            }
            console.log("Error: ", err.response.data)
            handleErrorOnSave(err.response.data.errors);
        });
    };
    return (
        <Container sx={{ width:"90%", margin: "50px auto"}}>
            <Grid container spacing={2} >
                <Grid item xs={8}>
                    <h1>Contact Number</h1>
                </Grid>
                <Grid item xs={4} sx={{ textAlign: "right" }}>
                    <Button variant="contained" onClick={()=>handleFormOpen(null)}>Add New</Button>
                </Grid>
                <Grid item xs={12}>
                    <StyledTableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="sCell"></TableCell>
                                    <TableCell className="sCell">CONTACT NO.</TableCell>
                                    <TableCell className="sCell">FULLNAME</TableCell>
                                    <TableCell className="sCell">EMAIL</TableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>
                                        <IconButton onClick={()=>handleFormOpen(row, true)}><EditIcon /></IconButton>
                                    </TableCell>
                                    <TableCell>{row.sim_number}</TableCell>
                                    <TableCell>{row.member?.fullname}</TableCell>
                                    <TableCell>{row.member?.email}</TableCell>

                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </StyledTableContainer>
                </Grid>
            </Grid>
            <ContactsForm
                open={dialogOpen}
                dialogHandleClose={handleFormClose}
                dialogHandleSave={handleFormSave}
                dialogHandleDelete={handleFormDelete}
                rowData={rowData}
                membersList={membersList}
                />
        </Container>
    )
}

export default Contacts;