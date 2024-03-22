import React from "react";
import {MenuItem} from "@mui/material";

export default function SingleMenuItem ({index,children, disabled}) {

    return (

        <MenuItem key={index} style={{ backgroundColor: "white" }} disabled = {disabled}>
            {children}
        </MenuItem>

    );

} 