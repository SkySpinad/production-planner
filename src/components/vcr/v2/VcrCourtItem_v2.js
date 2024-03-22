import React, { useState, useEffect } from "react";
import { Box, ListItemText } from "@mui/material";
import { statusColor } from "../../../common/layout";
import VcrCourtBody_v2 from "./VcrCourtBody_v2";
import VcrCourtItemHeader_v2 from "./VcrCourtItemHeader_v2";
import CheckBoxItem from "../../list/CheckBoxItem";
import { useMutation } from "@apollo/client";
import { FILL_WORKORDER } from "../../../api/graphql/mutationWorkOrder";
import { useSelector, useDispatch } from 'react-redux';

export default function VcrCourtItem_v2({handleUpdateMatches, isActions, court, index, showCheckbox, isOnlyRead, handleCheckedMatches }){
    
  const [showDetails, setShowDetails] = useState(false)
  const [isChecked, setIsChecked] = React.useState(false);
  const [workorders, setWorkorders] = React.useState([]);

  const locationList = useSelector((state) => state.locations.data);


  useEffect(() => {
  }, [workorders]);

    function handleShowDetails(){
      setShowDetails(!showDetails)
      setWorkorders(locationList)
    }

    function handleCheckedMatch(){
     
    }


    return <>
    <ListItemText
      disableTypography
      primary={
        <Box sx={{ cursor: "pointer" }}>
          <VcrCourtItemHeader_v2    
            isActions={isActions}
            handleShowDetails = {handleShowDetails}
            data={court}
          />
        </Box>
      }
      secondary={
        (showDetails || !isOnlyRead) &&
        <VcrCourtBody_v2 handleCheckedMatch={handleCheckedMatch} data={workorders} visible={true} />
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