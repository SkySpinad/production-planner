export class DayClass {

    country
    eventGroupId
    feedId
    
    constructor(country, eventGroupId, feedId){
        this.country = country
        this.eventGroupId = eventGroupId
        this.feedId = feedId
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

export var dayConfig= {
    country: { title: 'Country', type: FieldType.Text, span: 2, display: true },
    eventGroupId: { title: 'Event Group Id', type: FieldType.Text, span: 2, display: true },
    feedId: { title: 'Feed', type: FieldType.Text, span: 2, display: true }
};

export const dayField = Object.entries(dayConfig).filter(
    ([_, config]) => config.display,
);  