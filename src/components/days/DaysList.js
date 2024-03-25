import React, { useState, useEffect } from 'react'
import { Accordion, AccordionDetails, List } from '@mui/material'
import DayItem from './DayItem'
import DaysListHook from '../../hooks/DaysListHook';

export default function DaysList({ visible, isOnlyRead, element}) {

  //const [dayList, setDayList] = useState(data);
  const [dayList, setDayList] = useState([]);
  const [days] = DaysListHook(element.id)


  useEffect(() => {
    if(days.data) {
      setDayList(getDaysList(days.data))
    }

  }, [days])

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
        {dayList && dayList.map((day, index)=> (
          <DayItem data={day} key={"ev" + index} isOnlyRead={isOnlyRead} />
        ))}
      </List>
  </AccordionDetails>
  </Accordion>
  )
}


