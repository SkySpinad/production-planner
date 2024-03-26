import React from 'react'
import { Accordion, AccordionDetails, List } from '@mui/material'
import DayItem from './DayItem'
import DaysListHook from '../../hooks/DaysListHook';
import { useSelector } from 'react-redux';

export default function DaysList({ visible, isOnlyRead, element}) {

  const dayList = useSelector((state) => state.days.data);
  DaysListHook(element.id)

  function getDaysList(data) {
    const courtList = []
    data.map(courts=> {
      courts.courtList.map(court=> {
        courtList.push(court)
      })
    })
    return courtList
  }


  return (
    <Accordion defaultExpanded expanded={visible} TransitionProps={{ unmountOnExit: true }} elevation={0} style={{background:'#ffffff00', width:'100%'}}>
      <AccordionDetails style={{padding:0, margin:0}}>
      <List key={"daysList"}>
        {dayList.data && getDaysList(dayList.data).map((day, index)=> (
          <DayItem data={day} key={"ev" + index} isOnlyRead={isOnlyRead} />
        ))}
      </List>
  </AccordionDetails>
  </Accordion>
  )
}


