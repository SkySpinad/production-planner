import React from "react"
import { DateToStringFormat } from "../../../../utils/utils"

export class VcrMatchClass_v2 {
    startDateTime
    endDateTime
    eventRegion
    eventGroupName
    type
    title
    gender
    courtId
    courtName
    matchType
    competitionName
    proposition
    serviceKey
    score

    constructor(startDateTime, endDateTime, eventRegion, eventGroupName, type, title, gender, courtId, courtName, matchType, competitionName, serviceKey, proposition, score){
        this.startDateTime = startDateTime
        this.endDateTime = endDateTime
        this.eventRegion = eventRegion
        this.eventGroupName = eventGroupName
        this.type = type
        this.title = title
        this.gender = gender
        this.courtId = courtId
        this.courtName = courtName
        this.matchType = matchType
        this.competitionName = competitionName
        this.proposition = proposition
        this.serviceKey = serviceKey
        this.score = score
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
    eventRegion: { title: 'Event Region', type: FieldType.Text, span: 2, display: true },
    gender: { title: 'Gender', type: FieldType.Text, display: true },
    courtId: { title: 'Court ID', type: FieldType.Text, display: true },
    courtName: { title: 'Court Name', type: FieldType.Text, display: true },
    score: { title: 'Score', type: FieldType.Text, display: true },
    type: { title: 'Type', type: FieldType.Text, span: 2, display: true },
    startDateTime: { title: 'Start Date Time', type: FieldType.DateTime, minWidth: 180, display: true, template: dateTemplate },
    endDateTime: { title: 'End Date Time', type: FieldType.DateTime, minWidth: 180, display: true, template: dateTemplate }
};
export const workOrderField = Object.entries(workOrderConfig).filter(
    ([_, config]) => config.display,
); 