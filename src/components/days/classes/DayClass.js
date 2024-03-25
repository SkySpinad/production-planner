export class DayClass {

    tournamentId
    orderOfPlay
    coverageLevel
    drawPosition
    date
    position
    
    constructor(tournamentId, orderOfPlay, coverageLevel, drawPosition, date, position){
        this.tournamentId = tournamentId
        this.orderOfPlay = orderOfPlay
        this.coverageLevel = coverageLevel
        this.drawPosition = drawPosition
        this.date = date
        this.position = position
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
    position: { title: 'Position', type: FieldType.Text, span: 2, display: true },
    tournamentId: { title: 'Tournament Id', type: FieldType.Text, span: 2, display: true },
    orderOfPlay: { title: 'Order Of Play', type: FieldType.Text, span: 2, display: true },
    coverageLevel: { title: 'Coverage Level', type: FieldType.Text, span: 2, display: true },
    drawPosition: { title: 'Draw Position', type: FieldType.Text, span: 2, display: true },
    date: { title: 'Date', type: FieldType.Text, span: 2, display: true }
};

export const dayField = Object.entries(dayConfig).filter(
    ([_, config]) => config.display,
);  