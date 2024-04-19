import React from "react";
import CircleIcon from '@mui/icons-material/Circle';
import CustomIcon from "../../icons/CustomIcon";
import HorizontalCentered from "../../layout/HorizontalCentered";
import { getStatusColor } from "../../../services/serviceDB";

export default function CustomStatusItem({statusLabel, statusType}) {

    return (
        <HorizontalCentered>
            <CustomIcon customStyle={{border:""}} tooltipText={statusLabel.message} disabled={true}><CircleIcon style={{border:'1px solid black',borderRadius:'20px'}}  sx = {
                getStatusColor(statusLabel.statusCode, statusType)
            }/></CustomIcon>
      </HorizontalCentered>
    )
}