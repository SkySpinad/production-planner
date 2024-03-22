import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { getColorStatusEvent, getColorStatusEventUnconfirmed } from "../../utils/utils";
import { ListItemText } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import DaysList from "../days/DaysList";

export default function CompetitionItem({ element, children, showDetailsEventItem }) {

  const daysList = useSelector((state) => state.days.data);

  useEffect(() => {
  }, [showDetailsEventItem])


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
        <DaysList 
          visible={showDetailsEventItem} 
          data={daysList}
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
