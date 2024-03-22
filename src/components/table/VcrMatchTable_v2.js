import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { color } from '../../common/layout';
import CheckBoxItem from '../list/CheckBoxItem';
import TimePickerV2 from "../timepicker/Timepicker";
import { DateToStringFormat } from '../../utils/utils';
import { useEffect } from 'react';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import { sortByField } from '../../utils/list';
import CustomIcon from '../icons/CustomIcon';

export default function VcrMatchTable_v2({ isChecked, data, isOnlyRead, handleUpdateRows, handleCheckedMatch }){

  const [checkedMatches, setCheckedMatches] = React.useState([]);
  const [eventEndDate, setEventEndDate] = useState(null);
  const [eventStartDate, setEventStartDate] = useState(null);
  const [matchesList, setMatchesList] = useState([]);
  const [currentDateValue, setCurrentDateValue] = useState({id: null, startValue: null, endValue: null });
  const [currentCourtsListChecked, setCurrentCourtsListChecked] = useState(null);
  const [workorderId, setWorkorderId] = useState([]);

  const centeredStyle = { textAlign: 'center', verticalAlign: 'middle' };

  const headerStyle = { color: '#757575' };

  const bodyStyle = { color: color.blue };

  const tableStyle = { minWidth: '100%' , fontSize: '12px' };

  useEffect(() => {
  }, [matchesList]);

  useEffect(() => {
    if(data){
      setMatchesList(sortByField(data, "startDateTime"))
    }
  }, [data]);

  useEffect(() => {
    if(isChecked) {
      checkAllByCourtChecked()
    } 
    else {
      uncheckAllByCourtChecked()
    }
  }, [isChecked]);

  useEffect(() => {
   if(matchesList){
     setCurrentCourtsListChecked(isChecked)
    }
  }, [matchesList]);

  useEffect(() => {
    if(workorderId) {
      setCurrentDateValue({workOrderId: workorderId, eventStartDate: eventStartDate, eventEndDate: eventEndDate })
    }
  }, [workorderId, eventStartDate, eventEndDate]);
  
  useEffect(() => {
   if(currentCourtsListChecked){
    checkAll()
  }
  }, [currentCourtsListChecked]);


  useEffect(() => {
    handleCheckedMatch(checkedMatches, matchesList)
  }, [checkedMatches]);

  function checkAllByCourtChecked() {
    setCheckedMatches(matchesList);
  }

  function uncheckAllByCourtChecked() {
    if(checkedMatches.length == matchesList.length) {
     setCheckedMatches([]);
    }
  }

  function checkAll() {
    if (checkedMatches.length == 0) {
      const updatedCheckedMatches = [...checkedMatches];
      matchesList.map((match) => {
        if (!updatedCheckedMatches.includes(match)) updatedCheckedMatches.push(match);
      });
      setCheckedMatches(updatedCheckedMatches);
    } else {
      setCheckedMatches([]);
    }
  }

  const startDateEditor = (options) => {
    setWorkorderId(options.rowData.workOrderId)
    return <TimePickerV2 
            event={{ date: options.rowData.startDateTime }}
            textColor="black"
            limited={false}
            minDate={options.rowData.startDateTime}
            dateValue={eventStartDate}
            setDateValue={setEventStartDate} 
    />
  };

  const endDateEditor = (options) => {
    setWorkorderId(options.rowData.workOrderId)
    return <TimePickerV2 
            event={{ date: options.rowData.endDateTime }}
            textColor="black"
            limited={false}
            minDate={options.rowData.endDateTime}
            dateValue={eventEndDate}
            setDateValue={setEventEndDate} 
    />
  };

  const onRowEditComplete = (e) => {
    let _data = [...matchesList];
    let { newData, index } = e;
    _data[index] = newData;
    const newList = settingStartAndEndDateWorkorder(_data, currentDateValue)
    setEventStartDate()
    handleUpdateRows(newList)
  };

  function settingStartAndEndDateWorkorder(_data, dateValue) {
    const newList = []
    _data.map(wo => {
      if(wo.workOrderId == dateValue.workOrderId) {
        const newObj = {
          "workOrderId": wo.workOrderId,
          "eventRegion": wo.eventRegion,
          "startDateTime": dateValue.eventStartDate == null ? wo.startDateTime : dateValue.eventStartDate,
          "endDateTime": dateValue.eventEndDate == null ? wo.endDateTime : dateValue.eventEndDate,
          "courtId": wo.courtId,
          "courtName": wo.courtName,
          "type": wo.type,
          "gender": wo.gender,
        }
        newList.push(newObj)
      } else {
        newList.push(wo)
      }
    })
    setMatchesList(newList)
    return newList
  }

  const handleChangeMatches = (obj) => {
    if (obj.checked) {
      removeFromCheckedMatches(obj.value);
    } else {
      addToCheckedMatches(obj.value);
    }
  };

  const removeFromCheckedMatches = (value) => {
    const newcheckedMatchesList = [];
    checkedMatches.map((ck) => {
      if (JSON.stringify(ck) !== JSON.stringify(value)) {
        newcheckedMatchesList.push(ck);
      }
    });
    setCheckedMatches(newcheckedMatchesList);
  };

  const addToCheckedMatches = (value) => {
    const updatedCheckedMatches = [...checkedMatches];
    updatedCheckedMatches.push(value);
    setCheckedMatches(updatedCheckedMatches);
  };

  const startDateTemplate = (el) => {
    return <p>{ el === null ? '-' : DateToStringFormat(el.startDateTime)}</p>
  };

  const endDateTemplate = (el) => {
    return <p>{ el === null ? '-' : DateToStringFormat(el.endDateTime)}</p>
  };

  const viewCheckbox = (rowData) => {
    var isChecked = checkedMatches.some(item => item.workOrderId === rowData.workOrderId)
    return <CheckBoxItem
      handleChange={handleChangeMatches}
      checkBoxId={rowData.workOrderId}
      data={rowData}
      isChecked={isChecked}
    />
  };

  const fixUpEndDate = () => {
    return <CustomIcon onClick={setFixUpEndDate}> <AutoFixHighIcon style={{ color: color.blue }} /> </CustomIcon>

  };

  function setFixUpEndDate() {
    const newMatchesList = []
    for (let i = 0; i < matchesList.length; i++) {
      if(matchesList[i+1]) {
        var actualEndDataTime = new Date(matchesList[i]['endDateTime']).getTime()
        var nextstartDataTime = new Date(matchesList[i+1]['startDateTime']).getTime()
        if(actualEndDataTime > nextstartDataTime) {
          const newMatchObj = {
            workOrderId: matchesList[i].workOrderId,
            eventRegion: matchesList[i].eventRegion,
            startDateTime: matchesList[i].startDateTime,
            endDateTime: matchesList[i+1].startDateTime,
            courtId: matchesList[i].courtId,
            courtName: matchesList[i].courtName,
            type: matchesList[i].type,
            gender: matchesList[i].gender
          }
          newMatchesList.push(newMatchObj)
        } else {
          newMatchesList.push(matchesList[i])
        }
      } else {
        newMatchesList.push(matchesList[i])
      }
  }
  setMatchesList(newMatchesList)
  }

  return <DataTable
    value={matchesList}
    onRowEditComplete={onRowEditComplete}
    style={{ border: 'none', marginLeft: '50px', marginTop: '25px' }}
    scrollable
    removableSort
    scrollHeight="400px"
    size={"small"}
    sortField="follow"
    sortOrder={1}
    editMode="row"
    tableStyle={tableStyle}
    rows={25}
  >
    <Column field="id" header="Location ID" headerStyle={headerStyle} bodyStyle={bodyStyle} />
    <Column field="name" header="Location Name" headerStyle={headerStyle} bodyStyle={bodyStyle} />
  
  </DataTable>
}
