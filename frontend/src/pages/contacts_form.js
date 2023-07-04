import React, { useState, forwardRef, useEffect } from "react";
import { Dialog, AppBar, Toolbar, IconButton, Typography,
    Button, Slide, Container, Checkbox, TextField, List, ListItem,
    FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import  CloseIcon  from "@mui/icons-material/Close";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ContactsForm = ({ open, dialogHandleClose, dialogHandleSave, dialogHandleDelete, rowData, membersList }) => {
    const [formData, setFormData] = useState({});
    const [simErrorString, setSimErrorString] = useState("");
    const [emailErrorString, setEmailErrorString] = useState("");


    useEffect(() =>{
        setFormData({
            id: rowData?.id || null,
            sim_number: rowData?.sim_number || "",
            status: rowData?.status || false,

            member_id: rowData?.member_id || false

        });
    },[rowData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleErrorOnSave = (errors) => {

        let sim_str_error = "";
        let email_str_error = "";

        for( const key in errors){
            if(errors[key].field == 'sim_number'){
                url_str_error += ` ${errors[key].error_message}`
            }
            if(errors[key].field == 'email'){
                ip_str_error += ` ${errors[key].error_message}`
            }

        }
        setSimErrorString(sim_str_error);
        setEmailErrorString(email_str_error);

    };
    return (
        <Dialog
            fullScreen
            open={open}
            onClose={dialogHandleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: 'relative', backgroundColor: "#00755f" }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={dialogHandleClose}
                        aria-label="close"
                        >
                        <CloseIcon />
                    </IconButton>

                    <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                    { rowData ? "Edit Member's Contact Number": "Add New Contact Number" }
                    </Typography>

                    {rowData ? (
                        <Button autoFocus color="inherit" onClick={()=>dialogHandleDelete(formData)}>
                        Delete
                        </Button>
                    ):null}

                </Toolbar>

            </AppBar>
            <Container maxWidth="sm"
                style={{ height: "100vh", display: "flex", justifyContent: "center", marginTop: 50}}
                >
                <List sx={{
                    height: "100vh",
                    display: "grid",
                    width: 600,
                    maxWidth: "sm",
                    bgcolor: 'background.paper',
                    alignContent: "baseline"
                    }}>
                    <ListItem>
                        <TextField
                        id="outlined-basic"
                        label="SIM Number"
                        variant="outlined"
                        name="sim_number"
                        value={formData?.sim_number}
                        error={!!simErrorString}
                        fullWidth={true}
                        onChange={handleChange}
                        />
                    </ListItem>
                    { simErrorString && (
                        <ListItem>
                            <Typography variant="subtitle2" color="error" sx={{ width: "100%"}}>
                                {urlErrorString}
                            </Typography>
                        </ListItem>
                    )}

                    <ListItem>
                        <FormControl fullWidth>
                            <InputLabel id="department-label">Email</InputLabel>
                            <Select
                                labelId="department-label"
                                id="member_id"
                                name="member_id"
                                value={formData?.member_id || ""}
                                label="Email"
                                onChange={handleChange}
                                >
                                {membersList.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>{item.email}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </ListItem>

                    <ListItem sx={{
                            // width: "100%",
                            // height: 50,
                            // position: "absolute",
                            // alignSelf: "end",
                            // marginBottom: "100px",
                            display: "block",
                            marginTop: '50px',
                            textAlign: "right",
                        }}>

                        <Button autoFocus variant="contained" onClick={()=>dialogHandleSave(formData, handleErrorOnSave)}>
                        save
                        </Button>

                    </ListItem>

                </List>




            </Container>

        </Dialog>
    );
}
export default ContactsForm;