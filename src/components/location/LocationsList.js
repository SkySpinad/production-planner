import React, { useEffect } from "react";
import { Accordion, AccordionDetails, Typography } from "@mui/material";
import { useState } from "react";
import LocationsListHook from "../hooks/LocationsListHook";
import { useSelector } from 'react-redux';
import LocationsTable from "../table/LocationsTable";

export default function LocationsList({ data, visible, element }){

  const [locations, setLocations] = useState([]);
  const locationList = useSelector((state) => state.locations.data);
  LocationsListHook(element.eventGroupId)

    useEffect(()=>{
    },[visible])

    useEffect(()=>{
      if(data) {
        setLocations(data)
      }
    },[data])

    useEffect(()=>{
    },[locations])

    function handleUpdateRows(){

    }

    function handleUpsertPresentation(){
      
    }

    function handleUpdatePresentations(){
      
    }

    return <Accordion expanded={visible} TransitionProps={{ unmountOnExit: true }}  >
        <AccordionDetails style={{paddingBottom:'10px', margin:0}}>
          <Typography textAlign="center" fontSize={12} fontWeight={700} my={2}>
            Locations
          </Typography>
            <LocationsTable isOnlyRead={true} viewmenuselect={true} data={locationList} handleUpdateRows={handleUpdateRows} handleUpsertPresentation={handleUpsertPresentation} handleUpdatePresentations={handleUpdatePresentations}/>
      </AccordionDetails>
    </Accordion>
}
