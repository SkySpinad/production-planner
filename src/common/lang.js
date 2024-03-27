export const actionsEvent = ["Edit", "Delete"]
export const actionsCam = ["Force Start", "Force End"]
export const actionsAppBar = ["Start", "Stop"]
export const subActionsAppBar = ["StartSelected", "StopSelected", "StartAll", "StopAll"]
export const defaultEventID = '99'
export const titleWarning = 'Warning'
export const titleFilter = 'Filters'
export const clear = 'Clear'
export const placeholderInputFilter = 'Text Filter'
export const placeholderInputTextFilter = 'Text Filter'
export const placeholderDateFilter = 'Date Filter'
export const moreInfoType = {
    encoder: "Encoder",
    event: "Event"
}

export const labelMenuToolbar = {
    all: "All",
    selected: "Selected",
    stop: "Stop", 
    start: "Start",
    moreInfo: "More Info"
}

export const sportLabel = {
    soccer:"Soccer",
    motorsport:"Motorsport",
    tennis:"Tennis",
    golf:"Golf",

    football:"Football",
    multiSport:"MultiSport",
    all:"All",
}

export const timeLabel = {
  past:"Past",
  current:"Current",
  future:"Future"
}
export const sportList=[
    { value: 'Motorsport', label: 'Motorsport'},
    { value: 'Tennis', label: 'Tennis' },
    { value: 'Football', label: 'Football' },
    { value: 'Golf', label: 'Golf' },
    { value: 'Rugby', label: 'Rugby' },
    { value: 'MultiSport', label: 'MultiSport' }
]

export const global ={
    formatData:"it-IT"
}
export const messageDeleteEvent = "Do you want to continue to delete the selected item?"
export const messageMoreInfoEvent = "This is the More Info section"

export const warning={
    noCamSelected:"You need to select one or more Encoders"
}

export const productionPlannerLang = {
  appbar:{
      header:{
          selectAllTooltip:"Select All"
      },
      menu:{
          info:"More Info",
          download:"Download Csv"
      }
  },
  alert:{
    noCompetitionFilter:"No Competition found for your filters",
    noRefresh:"Dont refresh the page",
    seachOnDynamo:"[WIP] Search on Dynamo"
  },
  dialog:{
    defaultConfirmButton:"Confirm"
  },
  download: {
    fileNameCompetitions: "Competitions"
  }
}

export const vcrLang = {
    element:{
        menu:{
            createPresentation:"Create New Presentation",
            getPresentation:"View Presentations"
        }
    },
    dialogs:{

        defaultCreateLabel:"Create",
        defaultViewPresentations:"Presentations"
    },
    typeAction: {
        editCompetition: "EditCompetition",
        editLocation: "EditCourt"
      }
  }



