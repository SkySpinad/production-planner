import React from "react";
import PropType from "prop-types"
import { Typography, Stack, ListItemText } from '@mui/material';
import MetadataTable from "../MetadataTable/MetadataTable";
import { DayClass, dayField } from "./classes/DayClass";

export default function DayItemHeader({handleShowDetails, data }){

    return <Stack direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                onClick={handleShowDetails}
                >
            <Stack direction="row" alignItems="center" justifyContent={"flex-start"} style={{minWidth:'5%'}}>
       
            <ListItemText
                primary={
                    <Typography variant="subtitle1" >
                        <Stack 
                            direction="row">
                                <span>{data.id}</span>
                        </Stack>
                    </Typography>
                }
               
            />
          </Stack>
           <MetadataTable fields={dayField} metadata={data}  />
          </Stack>
}

DayItemHeader.propsType = {
    day: PropType.instanceOf(DayClass)
}
