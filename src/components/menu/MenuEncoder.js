import React from "react";
import { moreInfoType } from "../../common/lang";
import { Divider } from "@mui/material";
import SingleMenu from "./v2/SingleMenu";
import SingleMenuItem2 from "../list/v2/SingleMenuItem";
import RegistryDialog from "../dialog/v2/RegistryDialog";
import { faCirclePlay, faCircleStop } from "@fortawesome/free-solid-svg-icons";
import { encoderStatus } from "../../common/layout";
import EncoderStartStopSingleDialog from "../dialog/v2/EncoderStartStopSingleDialog";
import { ACTION_PERMISSIONS, isPermissionDenied } from "../../common/user";

export default function MenuEncoder({
  handleCloseHorizIcon,
  open,
  anchorEl,
  encoder, 
  startStopSingleCam
}) {


  return (
    <>
       <SingleMenu
                id="demo-customized-menu"
                anchorEl={anchorEl}
                open={open}
                handleCloseHorizIcon={handleCloseHorizIcon}
            >
            <SingleMenuItem2 disabled={ isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor) || new Date(encoder.scheduledEnd).getTime() < new Date().getTime() ? true : false   }>
                <EncoderStartStopSingleDialog icon={faCirclePlay}
                                          color={'green'}
                                          statusToChange={encoderStatus.Started} 
                                          encoder={encoder}
                                          handleChange={startStopSingleCam}/>
            </SingleMenuItem2>
            <SingleMenuItem2 disabled={isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor)}>
                <EncoderStartStopSingleDialog icon={faCircleStop} 
                                          statusToChange={encoderStatus.Stopped} 
                                          encoder={encoder}
                                          handleChange={startStopSingleCam}/>
            </SingleMenuItem2>
            <Divider sx={{ my: 0.5 }} />
            <SingleMenuItem2>
                <RegistryDialog type={moreInfoType.encoder} data={encoder}/>
        
            </SingleMenuItem2>
            </SingleMenu>
    </>
  );
}
