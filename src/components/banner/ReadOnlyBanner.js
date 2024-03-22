import React from "react";
import { Box } from "@mui/material";
import Alert from '@mui/material/Alert';

export default function ReadOnlyBanner() {

    return <Box sx={{ width: '100%', position:"absolute",zIndex:"-1", marginBlockStart:'-10px' }}>
      <Alert
        severity="warning"
        sx={{ mb: 2 }}
      >
        Reader Only User!
      </Alert>
  </Box>
}

