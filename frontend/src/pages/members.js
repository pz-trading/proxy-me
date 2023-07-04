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

import MembersForm from "./members_form";

const StyledTableContainer = styled(TableContainer)({
    width : '100%',
    '& .sCell': {
        width: '0 auto'
    }
});
function Members(){
    const [rowData, setrowData] = useState({});
    const [dialogOpen, setDialogOpen] = useState(false);
    const [data, setData] = useState([]);
    const [groupData, setGroupData] = useState([]);

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
            axios.get("/be-api/get-member/", {withCredentials: true})
            .then( (res) => {
                setData(res.data.rows);
            }).catch( (err) => {
                console.log(err);
            });

            axios.get("/be-api/get-groups/")
            .then( (res) => {
                setGroupData(res.data.rows);
            });
        }
    },[accountProfile, queryFlag]);
    const handleFormOpen = (data, onUpdate = false) => {
        setForUpdate(onUpdate);
        setrowData(data);
        setDialogOpen(true);
    };
    const handleFormClose = () => {
        setDialogOpen(false);
    };

    const handleFormSave = (data, handleErrorOnSave) => {
        data['for_update'] = forUpdate;
        axios.post("/be-api/save-member", data).then((res) => {
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
        axios.post("/be-api/delete-member", data
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
                    <h1>Members</h1>
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
                                    <TableCell className="sCell">FULLNAME</TableCell>
                                    <TableCell className="sCell">EMAIL</TableCell>
                                    <TableCell className="sCell">DEPARTMENT</TableCell>
                                    <TableCell className="sCell">STATUS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.map((row) => (
                                    <TableRow key={row.id}>
                                    <TableCell>
                                        <IconButton onClick={()=>handleFormOpen(row, true)}><EditIcon /></IconButton>
                                    </TableCell>
                                    <TableCell>{row.fullname}</TableCell>
                                    <TableCell>{row.email}</TableCell>
                                    <TableCell>{row.groups.department}</TableCell>
                                    <TableCell>{row.status ? "Active":"Not-active"}</TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </StyledTableContainer>
                </Grid>
            </Grid>
            <MembersForm
                open={dialogOpen}
                dialogHandleClose={handleFormClose}
                dialogHandleSave={handleFormSave}
                dialogHandleDelete={handleFormDelete}
                rowData={rowData}
                groupData={groupData}
                />
        </Container>
    )
}

export default Members;