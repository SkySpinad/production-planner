import React from "react"
import { DateToStringFormat } from "../../../utils/utils"
import CustomStatusItem from "../../list/v2/CustomStatusItem"

export class DayClass {

    name
    startDateTime
    endDateTime
    lucidStatus
    vcrStatus
    otherStatus

    constructor(name, startDateTime, endDateTime, lucidStatus, vcrStatus, otherStatus){
        this.name = name
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

function lucidStatusTemplate(el){
    return <CustomStatusItem statusLabel={el.lucidStatus} statusType={"lucidStatus"} />
}

function vcrStatusTemplate(el){
    return <CustomStatusItem statusLabel={el.vcrStatus} statusType={"vcrStatus"} />
}

function otherStatusTemplate(el){
    return <CustomStatusItem statusLabel={el.otherStatus} statusType={"otherStatus"} />
}

export var dayConfig= {
    name: { title: 'Name', type: FieldType.Text, span: 2, display: true },
    startDateTime: { title: 'Start Date', type: FieldType.Text, span: 2, display: true, template:dateTemplate },
    endDateTime: { title: 'End Date', type: FieldType.Text, span: 2, display: true, template:dateTemplate },
    lucidStatus: { title: 'Lucid Status', type: FieldType.Text, display: true, template:lucidStatusTemplate, isObject: true },
    vcrStatus: { title: 'VCR Status', type: FieldType.Text, display: true, template:vcrStatusTemplate, isObject: true },
    otherStatus: { title: 'Other Status', type: FieldType.Text, display: true, template:otherStatusTemplate, isObject: true }

};

export const dayField = Object.entries(dayConfig).filter(
    ([_, config]) => config.display,
);  