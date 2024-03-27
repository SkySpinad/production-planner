import { DateToStringFormat, checkFieldIsempty } from "../../../utils/utils"
import React from "react"
import CustomStatusItem from "../../list/v2/CustomStatusItem"

export class CompetitionClass {

    eventGroupName
    eventRegion
    gender
    lucidId
    matchType
    type
    startDateTime
    endDateTime
    lucidStatus
    vcrStatus
    otherStatus

    constructor(eventGroupName, eventRegion, gender, lucidId, matchType, type, startDateTime, endDateTime, lucidStatus, vcrStatus, otherStatus){
        this.eventGroupName = eventGroupName
        this.eventRegion = eventRegion
        this.gender = gender
        this.lucidId = lucidId
        this.matchType = matchType
        this.type = type
        this.startDateTime = startDateTime
        this.endDateTime = endDateTime
        this.lucidStatus = lucidStatus
        this.vcrStatus = vcrStatus
        this.otherStatus = otherStatus
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

function lucidStatusTemplate(el){
    return <CustomStatusItem statusLabel={el.lucidStatus} statusType={"lucidStatus"} />
}

function vcrStatusTemplate(el){
    return <CustomStatusItem statusLabel={el.vcrStatus} statusType={"vcrStatus"} />
}

function otherStatusTemplate(el){
    return <CustomStatusItem statusLabel={el.otherStatus} statusType={"otherStatus"} />
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
    lucidStatus: { title: 'Lucid Status', type: FieldType.Text, display: true, template:lucidStatusTemplate, isObject: true },
    vcrStatus: { title: 'VCR Status', type: FieldType.Text, display: true, template:vcrStatusTemplate, isObject: true },
    otherStatus: { title: 'Other Status', type: FieldType.Text, display: true, template:otherStatusTemplate, isObject: true }
};

export const competitionField = Object.entries(competitionConfig).filter(
    ([_, config]) => config.display,
);  