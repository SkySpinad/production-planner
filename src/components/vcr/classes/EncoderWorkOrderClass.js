
import React from "react"

export class McrEncoderClass {
    feed
    presentation 

    constructor(feed, presentation){
        this.feed = feed
        this.presentation = presentation
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

export var encoderConfig= {
    feed: { title: 'Feed', type: FieldType.Text, span: 2, display: true },
    descriptionPresentation: { title: 'Presentation', type: FieldType.Text, span: 2, display: true }

};

export const encoderField = Object.entries(encoderConfig).filter(
    ([_, config]) => config.display,
);  