import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { getColorStatusEvent, getColorStatusEventUnconfirmed } from "../../../utils/utils";
import { ListItemText } from "@mui/material";
import VcrCourtList_v2 from "./VcrCourtList_v2";
import { useSelector, useDispatch } from 'react-redux';

export default function VcrItem_v2({ element, children, showDetailsEventItem }) {

  const daysList = useSelector((state) => state.days.data);


  useEffect(() => {
  }, [showDetailsEventItem])

  function handleCheckedMatches(checkedMatches) {
  }

  function handleUpdateMatches() {
  }

  var color = element.status ? getColorStatusEventUnconfirmed(element.status) : getColorStatusEvent(element.date, element.dateEnd)
  return (
    <ListItemText
      disableTypography
      primary={
        <Box
          sx={{ cursor: "pointer" }}>
          {children}
        </Box>
      }
      secondary={showDetailsEventItem &&
        <VcrCourtList_v2 
          handleUpdateMatches={handleUpdateMatches}
          handleCheckedMatches={handleCheckedMatches}
          isActions={true}
          visible={showDetailsEventItem} 
          courts={daysList}
          showCheckbox={false}
          isOnlyRead={true}
        />
     }
      sx={{
        my: 1,
        border: "1px solid",
        borderColor: "grey.300",
        borderLeft: "8px solid",
        borderLeftColor: color,
        borderRadius: 1,
        maxWidth: '100%',
        padding: 2,
        pr: 2,
      }}
    />
  );
}
