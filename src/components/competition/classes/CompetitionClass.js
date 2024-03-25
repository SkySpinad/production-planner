import { DateToStringFormat } from "../../../utils/utils"
import React from "react"

export class CompetitionClass {

    areaId
    areaName
    follow
    lastUpdated
    startDate
    endDate
    year

    constructor(areaId, areaName, follow, lastUpdated, startDate, endDate, year){
       
        this.areaId = areaId
        this.areaName = areaName
        this.follow = follow
        this.lastUpdated = lastUpdated
        this.startDate = startDate
        this.endDate = endDate
        this.year = year
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

/*
function statusTemplate(encoder){
    return <CustomStatusItem encoder={encoder} />
}
*/

export var competitionConfig= {
    areaId: { title: 'areaId', type: FieldType.Text, span: 2, display: false },
    areaName: { title: 'Area Name', type: FieldType.Text, span: 2, display: true },
    follow: { title: 'follow', type: FieldType.Text, span: 2, display: false },
    year: { title: 'Year', type: FieldType.Text, display: true },
    lastUpdated: { title: 'lastUpdated', type: FieldType.Text, minWidth: 180, display: false, template:dateTemplate },
    startDate: { title: 'Start Date', type: FieldType.Text, minWidth: 180, span: 2, display: true, template:dateTemplate },
    endDate: { title: 'End Date', type: FieldType.Text, minWidth: 180, span: 2, display: true, template:dateTemplate },
};

export const competitionField = Object.entries(competitionConfig).filter(
    ([_, config]) => config.display,
);  