export class DayClass {

    name
    startDate
    
    constructor(name, startDate){
        this.name = name
        this.startDate = startDate
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
    name: { title: 'Name', type: FieldType.Text, span: 2, display: true },
    startDate: { title: 'Start Date', type: FieldType.Text, span: 2, display: true }
};

export const dayField = Object.entries(dayConfig).filter(
    ([_, config]) => config.display,
);  