import { Stack } from "@mui/material";
import React from "react";

export default function HorizontalCentered({spacing,children}) {
    return <Stack direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={spacing?spacing:1}>
            {children}
    </Stack>

}