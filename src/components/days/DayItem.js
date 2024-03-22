import React, { useState, useEffect } from "react";
import { Box, ListItemText } from "@mui/material";
import { statusColor } from "../../common/layout";
import { useSelector, useDispatch } from 'react-redux';
import DayItemHeader from "./DayItemHeader";
import LocationsList from "../location/LocationsList";

export default function DayItem({ data, isOnlyRead }){
    
  const [showDetails, setShowDetails] = useState(false)
  const [locations, setLocations] = React.useState([]);

  const locationList = useSelector((state) => state.locations.data);

  useEffect(() => {
  }, [locations]);

  function handleShowDetails(){
    setShowDetails(!showDetails)
    setLocations(locationList)
  }

  return <>
    <ListItemText
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
        <LocationsList data={locations} visible={true} />
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
  </>
}