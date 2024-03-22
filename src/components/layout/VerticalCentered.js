import { Stack } from "@mui/material";
import React from "react";

export default function VerticalCentered({spacing,children}) {
    return <Stack direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={spacing?spacing:1}>
            {children}
    </Stack>

}