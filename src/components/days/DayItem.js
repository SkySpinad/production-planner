import React, { useState } from "react";
import { Box, ListItemText } from "@mui/material";
import { statusColor } from "../../common/layout";
import DayItemHeader from "./DayItemHeader";
import LocationsList from "../location/LocationsList";

export default function DayItem({ data, isOnlyRead, element }){
   
  const [showDetails, setShowDetails] = useState(false)

  function handleShowDetails(){
    setShowDetails(!showDetails)
  }

  return <ListItemText
      disableTypography
      primary={
        <Box sx={{ cursor: "pointer" }}>
          <DayItemHeader    
            handleShowDetails={handleShowDetails}
            data={data}
          />
        </Box>
      }
      secondary={
        (showDetails || !isOnlyRead) &&
        <LocationsList visible={true} element={element}/>
      }
      sx={{
        my: 2,
        border: "1px solid",
        borderColor: "grey.300",
        borderLeftColor: "grey",
        borderLeft: "8px solid " + statusColor.grey,        
        borderRadius: 1,
        padding: 1,
        pr: 1,
      }}
    />
}