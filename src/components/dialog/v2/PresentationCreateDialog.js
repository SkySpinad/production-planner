import React from "react";
import BasicDialog from "./BasicDialog";
import { useState } from "react";
import MenuItem from "../../menu/MenuItem";
import { vcrLang } from "../../../common/lang";
import InputText from "../../text/InputText";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import { VerticalCentered, HorizontalCentered } from "@giobar93/production_ui_library";

export default function PresentationCreateDialog({data, handleClose, handleUpsertPresentation}) {

    const [open, setOpen] = useState(false);
    const [description, setDescription] = useState();
    const [feed, setFeed] = useState(data.feedId);
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
    
    return (
        <>
     <MenuItem handleClick={handleOpen} icon={faCalendarPlus} text={vcrLang.element.menu.createPresentation}/>
        <BasicDialog title={vcrLang.dialogs.defaultCreateLabel} isOpen={open} handleClose={handleDialogClose} handleConfirm={onHandleClick} confirmLabel={'Yes'}>

            <VerticalCentered>
                <InputText
                    title="Feed"
                    disabled={data.feedId === null ? false : true}
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