import React from "react";
import BasicDialog from "./BasicDialog";
import { useState } from "react";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { MenuItem } from "@giobar93/production_ui_library";
import { vcrLang } from "../../common/lang";
import { Button } from "react-rainbow-components";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

export default function PresentationCreateDialog({data, handleClose, handleUpsertPresentation}) {

    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState();
    const [feed, setFeed] = useState(data.lucidId);
    const [type, setType] = useState();
    const [source, setSource] = useState();
    const [ipRed, setIpRed] = useState();
    const [portRed, setPortRed] = useState();
    const [court, setCourt] = useState(data);

    const onHandleClick = () => {
        setOpen(false);
        handleUpsertPresentation(description, feed, type, source, ipRed, portRed, court);
    }

    function handleOpen(){
        setOpen(!open)
    }

    function handleDialogClose(){
        handleClose()
        setOpen(false)
    }

    var footer = <div className="rainbow-flex rainbow-justify_end">
        <Button
            form="redux-form-id"
            className="rainbow-m-right_large"
            label="Cancel"
            variant="neutral"
            onClick={() => handleDialogClose()}
        />
        <Button
        disabled={data.lucidId ? false : true}
        form="redux-form-id"
        label="Create Presentation"
        variant="brand"
        type="submit"
        onClick={onHandleClick}
        />
    </div>
    
    return (
        <>
     <MenuItem handleClick={handleOpen} icon={faCalendarPlus} text={vcrLang.element.menu.createPresentation}/>
        <BasicDialog footer={footer} title={vcrLang.dialogs.defaultCreateLabel} isOpen={open} handleClose={handleDialogClose} handleConfirm={onHandleClick} confirmLabel={'Yes'}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <TextField color="primary" label="Feed" variant="standard" value={feed} disabled={true} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField color="primary" label="Description" variant="standard" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField color="primary" label="Type Transport" variant="standard" value={type} onChange={(e) => setType(e.target.value)} />
                    </Grid>

                    <Grid item xs={4}>
                        <TextField color="primary" label="Source Transport" variant="standard" value={source} onChange={(e) => setSource(e.target.value)}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField color="primary" label="IpRed Transport" variant="standard" value={ipRed} onChange={(e) => setIpRed(e.target.value)} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField color="primary" label="PortRed Transport" variant="standard" value={portRed} onChange={(e) => setPortRed(e.target.value)} />
                    </Grid>
                </Grid>
            </Box>
        </BasicDialog>        
        </>
    );
}