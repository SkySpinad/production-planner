import React from 'react'
import { Accordion, AccordionDetails, List } from '@mui/material'
import { useState } from 'react'
import { useEffect } from 'react'
import VcrCourtItem_v2 from './VcrCourtItem_v2'

export default function VcrCourtList_v2({courts, visible, isActions, showCheckbox, isOnlyRead, handleCheckedMatches, handleUpdateMatches}) {

  const [courtList, setCourtList] = useState(courts);

  useEffect(() => {
  }, [courtList]);


  return (
    <Accordion defaultExpanded expanded={visible} TransitionProps={{ unmountOnExit: true }} elevation={0} style={{background:'#ffffff00', width:'100%'}}>
      <AccordionDetails style={{padding:0, margin:0}}>
      <List key={"eventList"}>
        {courtList && courtList.map((court, index)=> (
          <VcrCourtItem_v2 handleUpdateMatches={handleUpdateMatches} handleCheckedMatches={handleCheckedMatches} showCheckbox={showCheckbox} isActions={isActions} court={court} key={"ev" + index} index={index} isOnlyRead={isOnlyRead} />
        ))}
      </List>
  
  </AccordionDetails>
  </Accordion>
  )
}


