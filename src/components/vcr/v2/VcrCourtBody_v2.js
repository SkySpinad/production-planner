import React, { useEffect } from "react";
import { Accordion, AccordionDetails, Typography } from "@mui/material";
import VcrMatchTable_v2 from "../../table/VcrMatchTable_v2";
import { useState } from "react";

export default function VcrCourtBody_v2({handleUpdateMatches, isChecked, data, visible, isOnlyRead, handleCheckedMatch}){

  const [courts, setCourts] = useState([]);

    useEffect(()=>{

    },[visible])

    
    useEffect(()=>{
      if(data) {
        setCourts(getListCourtsDataTable(data))
      }
    },[data])

    useEffect(()=>{
    },[courts])

    function getListCourtsDataTable(data){
      const listCourt = []
      data.map(workorder=> {
        const courtObj = {
          id: workorder.id,
          name: workorder.name
        }
        listCourt.push(courtObj)
      })
      return listCourt
    }

    function handleUpdateRows(listUpdated) {
      const listCourt = []
      listUpdated.map(el => {
        const courtObj = {
          workOrderId: el.workOrderId,
          eventRegion: el.eventRegion,
          startDateTime: el.startDateTime,
          endDateTime: el.endDateTime,
          courtId: el.courtId,
          courtName: el.courtName,
          type: el.type,
          gender: el.gender
        }
        listCourt.push(courtObj)
      })
      setCourts(listCourt)
      handleUpdateMatches(listCourt)
    }
  
    
    return <Accordion expanded={visible} TransitionProps={{ unmountOnExit: true }}  >
        <AccordionDetails style={{paddingBottom:'10px', margin:0}}>
          
          <Typography textAlign="center" fontSize={12} fontWeight={700} my={2}>
            Locations
          </Typography>
            <VcrMatchTable_v2 isChecked={isChecked} data={courts} isOnlyRead={isOnlyRead} handleUpdateRows={handleUpdateRows} handleCheckedMatch={handleCheckedMatch} />
     
      </AccordionDetails>
    </Accordion>
}
