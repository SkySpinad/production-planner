import { ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import { encoderStatus } from "../../../common/layout";
import CustomIcon from "../../icons/CustomIcon";
import React from "react";
import HorizontalCentered from "../../layout/HorizontalCentered";

export default function CustomStatusItem ({data}) {

    return (
        <HorizontalCentered>
            <CustomIcon customStyle={{border:""}} tooltipText={data.status} disabled={true}><CircleIcon style={{border:'1px solid black',borderRadius:'20px'}}  sx = {encoderStatus[data.status]}/></CustomIcon>
            {data.statusMessage}
      </HorizontalCentered>
    )
}