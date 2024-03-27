import { DateToStringFormat, checkFieldIsempty } from "../../../utils/utils"
import React from "react"

export class CompetitionClass {

    eventGroupName
    eventRegion
    gender
    lucidId
    matchType
    type
    startDateTime
    endDateTime

    constructor(eventGroupName, eventRegion, gender, lucidId, matchType, type, startDateTime, endDateTime){
        this.eventGroupName = eventGroupName
        this.eventRegion = eventRegion
        this.gender = gender
        this.lucidId = lucidId
        this.matchType = matchType
        this.type = type
        this.startDateTime = startDateTime
        this.endDateTime = endDateTime
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


function lucidTemplate(el){
    return <p>{ checkFieldIsempty(el) ? null : JSON.parse(el).description}</p>
}

export var competitionConfig= {
    eventGroupName: { title: 'Event GroupName', type: FieldType.Text, span: 2, display: true },
    eventRegion: { title: 'Event Region', type: FieldType.Text, span: 2, display: true },
    gender: { title: 'Gender', type: FieldType.Text, span: 2, display: true },
    lucidId: { title: 'Lucid Id', type: FieldType.Text, display: true, template:lucidTemplate },
    matchType: { title: 'Match Type', type: FieldType.Text, display: true },
    type: { title: 'Type', type: FieldType.Text, display: true },
    startDateTime: { title: 'Start Date', type: FieldType.Text, minWidth: 180, span: 2, display: true, template:dateTemplate },
    endDateTime: { title: 'End Date', type: FieldType.Text, minWidth: 180, span: 2, display: true, template:dateTemplate },
};

export const competitionField = Object.entries(competitionConfig).filter(
    ([_, config]) => config.display,
);  