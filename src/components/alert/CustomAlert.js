import { Alert, AlertTitle } from "@mui/material";
import React from "react";
import { titleWarning } from "../../common/lang";

export default function CustomAlert({text,color}){
    return <Alert sx={{width:'100%'}} severity={color}>
        <AlertTitle><strong>{titleWarning}</strong></AlertTitle>
        {text}
        </Alert>
}