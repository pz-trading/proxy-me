import React, { useState, forwardRef, useEffect } from "react";
import { Dialog, AppBar, Toolbar, IconButton, Typography,
    Button, Slide, Container, Checkbox, TextField, List, ListItem,
    FormControl, MenuItem, Select, InputLabel, Switch, FormControlLabel, FormGroup } from "@mui/material";
import  CloseIcon  from "@mui/icons-material/Close";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const AdminForm = ({ open, dialogHandleClose, dialogHandleSave, dialogHandleDelete, rowData }) => {
    const [formData, setFormData] = useState({});
    const [emailErrorString, setEmailErrorString] = useState("");
    const [resetpasscodeErrorString, setResetpasscodeErrorString] = useState("");

    useEffect(() =>{
        setFormData({
            id: rowData?.id || null,
            email: rowData?.email || "",
            access_level: rowData?.access_level || false,
            reset_password_code: rowData?.reset_password_code || "",
            request_reset: rowData?.request_reset || false
        });
    },[rowData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const handleSwitchChange = (e) => {
        const { name, checked } = e.target; // Use `checked` instead of `value`
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: checked, // Ensure that the value is a boolean
        }));
    };

    const handleErrorOnSave = (errors) => {
        let email_str_error = "";
        let reset_pass_code_str_error = "";

        for( const key in errors){
            if(errors[key].field == 'email'){
                email_str_error += ` ${errors[key].error_message}`
            }
            if(errors[key].field == 'reset_password_code'){
                reset_pass_code_str_error += ` ${errors[key].error_message}`
            }
        }
        setEmailErrorString(email_str_error);
        setResetpasscodeErrorString(reset_pass_code_str_error);
    };
    const accessLevelList = [
        {id:1, title:"Super Admin"},
        {id:2, title:"Admin"},
        {id:3, title:"Management"}
    ];

    const getSwitch =(data)=>{
        if (data){
            return (<Switch
                name="request_reset"
                checked={!!formData?.request_reset}
                onChange={handleSwitchChange}
                />);
        }else{
            return (<Switch
                name="request_reset"
                checked={true}
                onChange={handleSwitchChange}
                disabled={true}
                />);
        }
    }
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
                    { rowData ? "Edit Users's Settings": "Add New User Access" }
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
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={formData?.email}
                        error={!!emailErrorString}
                        fullWidth={true}
                        onChange={handleChange}
                        />
                    </ListItem>
                    { emailErrorString && (
                        <ListItem>
                            <Typography variant="subtitle2" color="error" sx={{ width: "100%"}}>
                                {emailErrorString}
                            </Typography>
                        </ListItem>
                    )}

                    <ListItem>
                        <FormControl fullWidth>
                            <InputLabel id="access_level-label">Access Level</InputLabel>
                            <Select
                                labelId="access_level-label"
                                id="access_level"
                                name="access_level"
                                value={formData?.access_level || ""}
                                label="Access Level"
                                onChange={handleChange}
                                >
                                {accessLevelList.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>{item.title}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </ListItem>
                    <ListItem>
                        <FormGroup>
                            <FormControlLabel
                            control={getSwitch(rowData)}
                            label="Reset Password" />
                        </FormGroup>
                    </ListItem>
                    <ListItem>
                        <TextField
                        id="outlined-basic"
                        label="Request Code Password Reset"
                        variant="outlined"
                        name="reset_password_code"
                        value={formData?.reset_password_code}
                        fullWidth={true}
                        disabled={!rowData? false : (!formData?.request_reset)}
                        onChange={handleChange}
                        />
                    </ListItem>
                    { resetpasscodeErrorString && (
                        <ListItem>
                            <Typography variant="subtitle2" color="error" sx={{ width: "100%"}}>
                                {resetpasscodeErrorString}
                            </Typography>
                        </ListItem>
                    )}
                    <ListItem sx={{
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
export default AdminForm;