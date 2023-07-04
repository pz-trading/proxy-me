import React, { useState, forwardRef, useEffect } from "react";
import { Dialog, AppBar, Toolbar, IconButton, Typography,
    Button, Slide, Container, Checkbox, TextField, List, ListItem,
    FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import  CloseIcon  from "@mui/icons-material/Close";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ProxyForm = ({ open, dialogHandleClose, dialogHandleSave, dialogHandleDelete, rowData, groupData }) => {
    const [formData, setFormData] = useState({});
    const [urlErrorString, setUrlErrorString] = useState("");
    const [ipErrorString, setIpErrorString] = useState("");
    const [portErrorString, setPortErrorString] = useState("");

    useEffect(() =>{
        setFormData({
            id: rowData?.id || null,
            url: rowData?.url || "",
            ip: rowData?.ip || "",
            port: rowData?.port || "",
            department: rowData?.department?.department || "",
            department_id: rowData?.department_id || "",
            mode: rowData?.mode || "",
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

        let url_str_error = "";
        let ip_str_error = "";
        let port_str_error = "";
        for( const key in errors){
            if(errors[key].field == 'url'){
                url_str_error += ` ${errors[key].error_message}`
            }
            if(errors[key].field == 'ip'){
                ip_str_error += ` ${errors[key].error_message}`
            }
            if(errors[key].field == 'port'){
                port_str_error += ` ${errors[key].error_message}`
            }
        }
        setUrlErrorString(url_str_error);
        setIpErrorString(ip_str_error);
        setPortErrorString(port_str_error);

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
                    { rowData ? "Edit Proxy Configuration": "Add New Proxy" }
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
                        label="URL"
                        variant="outlined"
                        name="url"
                        value={formData?.url}
                        error={!!urlErrorString}
                        fullWidth={true}
                        onChange={handleChange}
                        />
                    </ListItem>
                    { urlErrorString && (
                        <ListItem>
                            <Typography variant="subtitle2" color="error" sx={{ width: "100%"}}>
                                {urlErrorString}
                            </Typography>
                        </ListItem>
                    )}
                    <ListItem>
                        <TextField
                        id="outlined-basic"
                        label="IP"
                        variant="outlined"
                        name="ip"
                        value={formData?.ip}
                        error={!!ipErrorString}
                        onChange={handleChange}
                        sx={{ width:"70%"}}
                        /> :
                        <TextField
                        id="outlined-basic"
                        label="Port"
                        variant="outlined"
                        name="port"
                        value={formData?.port}
                        error={!!portErrorString}
                        sx={{ width:"30%"}}
                        onChange={handleChange}
                         />
                    </ListItem>
                    { (ipErrorString || portErrorString) && (
                        <ListItem>
                            <Typography variant="subtitle2" color="error" sx={{ width: "100%"}}>
                                {ipErrorString}
                                {portErrorString}
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
                                id="department_id"
                                name="department_id"
                                value={formData?.department_id}
                                label="Department"
                                onChange={handleChange}
                                >
                                {groupData.map((item) => (
                                    <MenuItem key={item.id} value={item.id}>{item.department}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </ListItem>

                    <ListItem>
                        <TextField id="outlined-basic" label="Mode" variant="outlined" name="mode" value={formData?.mode}
                        onChange={handleChange}
                        sx = {{
                            width: "100%"
                        }} />
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
export default ProxyForm;