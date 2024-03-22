import React, { useState, useEffect } from 'react'
import { Accordion, AccordionDetails, List } from '@mui/material'
import DayItem from './DayItem'

export default function DaysList({data, visible, isOnlyRead}) {

  const [dayList, setDayList] = useState(data);

  useEffect(() => {
  }, [dayList]);


  return (
    <Accordion defaultExpanded expanded={visible} TransitionProps={{ unmountOnExit: true }} elevation={0} style={{background:'#ffffff00', width:'100%'}}>
      <AccordionDetails style={{padding:0, margin:0}}>
      <List key={"daysList"}>
        {dayList && dayList.map((day, index)=> (
          <DayItem data={day} key={"ev" + index} isOnlyRead={isOnlyRead} />
        ))}
      </List>
  </AccordionDetails>
  </Accordion>
  )
}


