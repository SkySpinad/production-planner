import React from "react";
import BasicDialog from "./BasicDialog";
import { useState } from "react";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { VerticalCentered, HorizontalCentered, MenuItem, InputText } from "@giobar93/production_ui_library";
import { vcrLang } from "../../common/lang";
import { Button } from "react-rainbow-components";

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

            <VerticalCentered>
                <InputText
                    title="Feed"
                    disabled={data.lucidId === null ? false : true}
                    handleChange={setFeed}
                    currentValue={feed}>
                </InputText>
                <InputText
                    title="Description"
                    handleChange={setDescription}
                    currentValue={description}>
                </InputText>

                <br></br> <br></br>
                <HorizontalCentered>
                    <InputText
                        title="Type Transport"
                        handleChange={setType}
                        currentValue={type}>
                    </InputText>

                    <InputText
                        title="Source Transport"
                        handleChange={setSource}
                        currentValue={source}>
                    </InputText>
                </HorizontalCentered> 

                <HorizontalCentered>
                    <InputText
                        title="IpRed Transport"
                        handleChange={setIpRed}
                        currentValue={ipRed}>
                    </InputText>

                    <InputText
                        title="PortRed Transport"
                        handleChange={setPortRed}
                        currentValue={portRed}>
                    </InputText>  
                </HorizontalCentered> 
            </VerticalCentered>
        </BasicDialog>        
        </>
    );
}