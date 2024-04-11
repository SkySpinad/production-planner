import { DateToStringFormat, checkFieldIsempty } from "../../../utils/utils"
import React from "react"
import CustomStatusItem from "../../list/v2/CustomStatusItem"

export class CompetitionClass {

    eventGroupEndDate
    eventGroupId
    eventGroupName
    eventGroupStartDate
    eventParentGroupId
    eventParentGroupName
    eventSubType
    eventType
    lucidId
    lucidStatus

    constructor(eventGroupEndDate, eventGroupId, eventGroupName, eventGroupStartDate, eventParentGroupId, eventParentGroupName, eventSubType, eventType, lucidId, lucidStatus){
        this.eventGroupEndDate = eventGroupEndDate
        this.eventGroupId = eventGroupId
        this.eventGroupName = eventGroupName
        this.eventGroupStartDate = eventGroupStartDate
        this.eventParentGroupId = eventParentGroupId
        this.eventParentGroupName = eventParentGroupName
        this.eventSubType = eventSubType
        this.eventType = eventType
        this.lucidId = lucidId
        this.lucidStatus = lucidStatus
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

export var competitionConfig= {
    eventGroupName: { title: 'Group Name', type: FieldType.Text, span: 2, display: true },
    eventGroupStartDate: { title: 'Start Date', type: FieldType.Text, display: true, template:dateTemplate },
    eventGroupEndDate: { title: 'End Date', type: FieldType.Text, span: 2, display: true, template:dateTemplate },
    eventGroupId: { title: 'eventGroupId', type: FieldType.Text, span: 2, display: false },
    eventParentGroupId: { title: 'eventParentGroupId', type: FieldType.Text, display: false },
    eventParentGroupName: { title: 'Parent Group Name', type: FieldType.Text, display: true },
    eventType: { title: 'Type', type: FieldType.Text, minWidth: 180, span: 2, display: true },
    eventSubType: { title: 'Sub Type', type: FieldType.Text, display: true },
    lucidId: { title: 'lucidId', type: FieldType.Text, minWidth: 180, span: 2, display: true, template:lucidTemplate },
    lucidStatus: { title: 'Lucid Status', type: FieldType.Text, display: true, template:lucidStatusTemplate, isObject: true }
};

export const competitionField = Object.entries(competitionConfig).filter(
    ([_, config]) => config.display,
);  








