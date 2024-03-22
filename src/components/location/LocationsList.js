import React, { useEffect } from "react";
import { Accordion, AccordionDetails, Typography } from "@mui/material";
import { useState } from "react";
import LocationsTable from "../table/LocationsTable";

export default function LocationsList({ data, visible }){

  const [locations, setLocations] = useState([]);

    useEffect(()=>{
    },[visible])

    useEffect(()=>{
      if(data) {
        setLocations(data)
      }
    },[data])

    useEffect(()=>{
    },[locations])

    return <Accordion expanded={visible} TransitionProps={{ unmountOnExit: true }}  >
        <AccordionDetails style={{paddingBottom:'10px', margin:0}}>
          
          <Typography textAlign="center" fontSize={12} fontWeight={700} my={2}>
            Locations
          </Typography>
            <LocationsTable data={locations} />
     
      </AccordionDetails>
    </Accordion>
}
