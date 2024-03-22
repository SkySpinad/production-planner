import { DateToStringFormat } from "../../../../utils/utils"
import React from "react"

export class VcrClass_v2 {
    
    startDateTime
    endDateTime
    lucidId

    constructor(startDateTime, endDateTime, lucidId){
        this.startDateTime = startDateTime
        this.endDateTime = endDateTime
        this.lucidId = lucidId
       
    }
}
export var FieldType = {
    Text : 'text',
    MultiLine : 'multiline',
    Select : 'select',
    Date : 'date',
    Time : 'time',
    DateTime : 'datetime',
    MultiSelect : 'multiSelect',
  }

  function dateTemplate(el){
    return <p>{ el === null ? '-' : DateToStringFormat(el)}</p>
}


export var workOrderConfig = {
    startDateTime: { title: 'Start Date Time', type: FieldType.DateTime, minWidth: 180, display: false, template: dateTemplate },
    endDateTime: { title: 'End Date Time', type: FieldType.DateTime, minWidth: 180, display: false, template: dateTemplate },
    lucidId: { title: 'Lucid Event ID', type: FieldType.Text, span: 2, display: false },
};
export const workOrderField = Object.entries(workOrderConfig).filter(
    ([_, config]) => config.display,
); 