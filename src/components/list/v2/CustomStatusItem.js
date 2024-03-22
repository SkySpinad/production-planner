import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { encoderStatus } from "../../../common/layout";
import CustomIcon from "../../icons/CustomIcon";
import React from "react";
import HorizontalCentered from "../../layout/HorizontalCentered";

export default function CustomStatusItem ({encoder}) {

    return (
        <HorizontalCentered>
            <CustomIcon customStyle={{border:""}} tooltipText={encoder.status} disabled={true}><CircleIcon style={{border:'1px solid black',borderRadius:'20px'}}  sx = {encoderStatus[encoder.status]}/></CustomIcon>
            {encoder.statusMessage}
      </HorizontalCentered>
    )
}