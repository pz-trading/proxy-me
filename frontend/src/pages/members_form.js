import React, { useState, forwardRef, useEffect } from "react";
import { Dialog, AppBar, Toolbar, IconButton, Typography,
    Button, Slide, Container, Checkbox, TextField, List, ListItem,
    Select, InputLabel, MenuItem, FormControl } from "@mui/material";
import  CloseIcon  from "@mui/icons-material/Close";



const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MembersForm = ({ open, dialogHandleClose, dialogHandleSave, dialogHandleDelete, rowData, groupData }) => {
    const [formData, setFormData] = useState({});
    const [fullnameErrorString, setFullnameErrorString] = useState("");
    const [emailErrorString, setEmailErrorString] = useState("");
    const [departmentErrorString, setDepartmentErrorString] = useState("");

    useEffect(() =>{
        setFormData({
            id: rowData?.id || null,
            fullname: rowData?.fullname || "",
            email: rowData?.email || "",
            group_id: rowData?.group_id || "",
            status: rowData?.status || false,
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

        let fullname_str_error = "";
        let email_str_error = "";
        let department_str_error = "";
        for( const key in errors){
            if(errors[key].field == 'fullname'){
                fullname_str_error += ` ${errors[key].error_message}`
            }
            if(errors[key].field == 'email'){
                email_str_error += ` ${errors[key].error_message}`
            }
            if(errors[key].field == 'group_id'){
                department_str_error += ` ${errors[key].error_message}`
            }
        }
        setFullnameErrorString(fullname_str_error);
        setEmailErrorString(email_str_error);
        setDepartmentErrorString(department_str_error);

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
                    { rowData ? "Edit Member's Information": "Add New Member" }
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
                        label="Fullname"
                        variant="outlined"
                        name="fullname"
                        value={formData?.fullname}
                        error={!!fullnameErrorString}
                        fullWidth={true}
                        onChange={handleChange}
                        />
                    </ListItem>
                    { fullnameErrorString && (
                        <ListItem>
                            <Typography variant="subtitle2" color="error" sx={{ width: "100%"}}>
                                {fullnameErrorString}
                            </Typography>
                        </ListItem>
                    )}
                    <ListItem>
                        <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        name="email"
                        value={formData?.email}
                        error={!!emailErrorString}
                        onChange={handleChange}
                        sx={{ width:"100%"}}
                        />
                    </ListItem>
                    { (emailErrorString ) && (
                        <ListItem>
                            <Typography variant="subtitle2" color="error" sx={{ width: "100%"}}>
                                {emailErrorString}
                            </Typography>
                        </ListItem>
                    )}
                    {rowData ? (
                    <ListItem>
                        <Checkbox
                            onChange={()=>{
                                const { name, checked } = event.target;
                                setFormData((prevFormData) => ({
                                ...prevFormData,
                                [name]: checked,
                                }));
                            }}
                            checked={formData?.status || false}
                            name="status"
                            sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                            /> Status Active
                    </ListItem>
                    ):null}
                    <ListItem>
                        <FormControl fullWidth>
                            <InputLabel id="department-label">Department</InputLabel>
                            <Select
                                labelId="department-label"
                                id="group_id"
                                name="group_id"
                                value={formData?.group_id}
                                label="Department"
                                onChange={handleChange}
                                >
                                {groupData.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>{item.department}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </ListItem>

                    { (departmentErrorString ) && (
                        <ListItem>
                            <Typography variant="subtitle2" color="error" sx={{ width: "100%"}}>
                                {departmentErrorString}
                            </Typography>
                        </ListItem>
                    )}

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
export default MembersForm;