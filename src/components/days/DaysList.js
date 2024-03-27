import React from 'react'
import { Accordion, AccordionDetails, List } from '@mui/material'
import DayItem from './DayItem'
import { useSelector } from 'react-redux';

export default function DaysList({ visible, isOnlyRead, element}) {

  const dayList = useSelector((state) => state.days.data);

  return (
    <Accordion defaultExpanded expanded={visible} TransitionProps={{ unmountOnExit: true }} elevation={0} style={{background:'#ffffff00', width:'100%'}}>
      <AccordionDetails style={{padding:0, margin:0}}>
      <List key={"daysList"}>
        {dayList.data && dayList.data.map((day, index)=> (
          <DayItem data={day} element={element} key={"ev" + index} isOnlyRead={isOnlyRead} />
        ))}
      </List>
  </AccordionDetails>
  </Accordion>
  )
}


