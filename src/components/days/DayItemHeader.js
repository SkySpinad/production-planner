import React from "react";
import PropType from "prop-types"
import { Typography, Stack, ListItemText } from '@mui/material';
import MetadataTable from "../MetadataTable/MetadataTable";
import { DayClass, dayField } from "./classes/DayClass";
import CustomStatusItem from "../list/v2/CustomStatusItem";

export default function DayItemHeader({handleShowDetails, data }){

    return (
        <>
        <Stack direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}>
            <Stack direction="row" alignItems="center" justifyContent={"flex-start"} style={{minWidth:'20%'}}>
       
            <ListItemText onClick={handleShowDetails}
                primary={
                    <Typography  variant="subtitle1" >
                        <Stack 
                            direction="row">
                                <span>{data.id}</span>
                        </Stack>
                    </Typography>
                }
                secondary={<Typography  variant="h5">
                        {data.name}
                    </Typography>}
            />
            
          </Stack>
           <MetadataTable fields={dayField} metadata={data}  />
           <CustomStatusItem encoder={data} />
           <CustomStatusItem encoder={data} />
           <CustomStatusItem encoder={data} />
          </Stack>
        </>
      );
}

DayItemHeader.propsType = {
    day: PropType.instanceOf(DayClass)
}
