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
    noVCRFound:"No VCR found...Create new one",
    noVCRFilter:"No VCR found for your filters",
    noRefresh:"Dont refresh the page",
    seachOnDynamo:"[WIP] Search on Dynamo"
  }
}

export const workOrderLang = {
  appbar:{
      header:{
          selectAllTooltip:"Select All"
      },
      titleWorkOrder:"Work Order",
      menu:{
          info:"More Info",
          download:"Download Csv"
      }
  },
  element:{
      menu:{
          edit:'Edit',
          confirm:'Confirm',
          decline:'Decline',
          copy:'Copy',
          delete:"Delete"
      }
  },
  dialogs:{
      edit:{
          title:"Update Request",
          message:"Update request for the event with ID "
      },
      defaultDeleteLabel:"Delete",
      workorderCheckFeedPresentationLambdaMessage:"Either presentation or feed data not present on database",
      workorderCheckFeedPresentationLambda:"Either presentation or feed data not present on database",
      deleteText :"Are you sure you want to delete this workOrder?",
      copyText :"Are you sure you want to Copy this workOrder?",
      eventRegion:"Event Region: ",
      sport:"Sport: ",
      status:"Status: ",
      startDate:"Start Date: ",
      endDate:"End Date: ",
      date:"Date ",
      name:"Name ",
      type:"Type ",
      moreInfo:"No info"
  },
  alert:{
    noWorkOrderFound:"No WorkOrder found...Create new one",
    noWorkOrderFilter:"No WorkOrder found for your filters",
    noRefresh:"Dont refresh the page",
    seachOnDynamo:"[WIP] Search on Dynamo"
  },
  typeAction: {
    editWorkorder: "EditWorkorder",
    publishWorkorder: "PublishWorkorder",
    publishWorkorderMassive: "PublishWorkorderMassive",
    edithWorkorderMassive: "EditWorkorderMassive"
  }
}

export const territoryList=[
  { value: 'GB', label: 'Regno Unito' },
  { value: 'IT', label: 'Italia' },
  /*{ value: 'FR', label: 'Francia' },
  { value: 'BE', label: 'Belgio' },*/
  { value: 'DE', label: 'Germania' },
  /*{ value: 'NL', label: 'Paesi Bassi' },
  { value: 'DK', label: 'Germania' },
  { value: 'IE', label: 'Irlanda' },
  { value: 'GR', label: 'Grecia' },
  { value: 'PT', label: 'Portogallo' },
  { value: 'ES', label: 'Spagna' },
  { value: 'CH', label: 'Svizzera' },
  { value: 'UA', label: 'Ucraina' },
  { value: 'AF', label: 'Afghanistan' },
  { value: 'AL', label: 'Albania' },
  { value: 'DZ', label: 'Algeria' },
  { value: 'AD', label: 'Andorra' },
  { value: 'AO', label: 'Angola' },
  { value: 'AI', label: 'Anguilla' },
  { value: 'AQ', label: 'Antartide' },
  { value: 'AR', label: 'Arabia Saudita' },
  { value: 'ES', label: 'Argentina' },
  { value: 'AM', label: 'Armenia' },
  { value: 'AU', label: 'Australia' },
  { value: 'AT', label: 'Austria' },
  { value: 'AZ', label: 'Azerbaigian' },
  { value: 'BS', label: 'Bahamas' },
  { value: 'BO', label: 'Bolivia' },
  { value: 'BR', label: 'Brasile' },
  { value: 'BG', label: 'Bulgaria' },
  { value: 'CN', label: 'Cina' },
  { value: 'CL', label: 'Cile' },
  { value: 'HR', label: 'Croazia' }*/
]


export const encoderLang = {
  appbar:{
      header:{
          selectAllTooltip:"Select All",
          deselectAllTooltip:"Deselect",
          edit:"Edit",
          back:"Back",
          selectFirst:"Select one Encoder for Edit",
          noCameraSelectedTitle:"No encoder selected",
          noCameraSelectedMessage:"You must select one or more encoders"
      },
      title:"Events"
  },
  sidebar:{
      edit:"Edit",
      labelName:"Label Name",
      startDateLabel:"Start Date",
      endDateLabel:"End Date",
      tag:"Tag",
      clear:"Clear"
  },
  element:{
      key1:"Sport",
      key2:"Event Data",
      startDateLabel:"Start Date at",
      endDateLabel:"End Date at",
      serviceKeyLabel:"Service Key",
      proposition:"Proposition",
      menu:{
          edit:'Edit',
          delete:"Delete"
      }
  },
  dialog:{
      defaultConfirmButton:"Confirm",
      defautlUpdateButton:"Update",
      editLabel:"Edit",
      confirmSelectedEncoder:"Are you sure you want to $STATUS selected Encoders?",
      confirmAllEncoders:"Are you sure you want to $STATUS all Encoders?",
      confirmText : "Are you sure you want to $STATUS this Encoder?",
      deleteText :"Are you sure you want to delete this encoder?",
      encoderName:"Encoder name:",
      serviceKey:"Service Key:",
      defaultDeleteLabel:"Delete",
      encoderName:"Encoder name: "
  }
}

export const eventLang = {
  appbar:{
      header:{
          selectAllTooltip:"Select All"
      },
      title:"Confirmed",
      titleUnconfirmed:"Unconfirmed",
      titleWorkOrder:"Work Order",
      menu:{
          create:"Add Event",
          info:"More Info",
          refresh:"Refresh Status",
          download:"Download Csv"
      }
  },
  element:{
      key1:"Sport",
      key2:"Event Start Date",
      key3:"Event End Date",
      menu:{
          edit:'Edit',
          publish:'Publish',
          copy:'Copy',
          delete:"Delete",
          encInfo:"Enc Info"
      }
  },
  dialogs:{
      edit:{
          title:"Update Request",
          message:"Update request for the event with ID "
      },
      eventNameRequired:"Event Name is a required field",
      eventDateRequired:"Event Date is a required field",
      eventOverlap:"Overlap with other Service Key",
      eventOverlapLambdaMessage:"Service key overlapping",
      eventEndDateRequired:"Please confirm Event end date",
      eventEndDatePrevious:"Event End Date < Event Start Date",
      eventDateInThePast:"Event Date is in the past",
      eventSportRequired:"Event Sport is a required field",
      eventPropositionRequired:"Event Proposition is a required field",
      defaultDeleteLabel:"Delete",
      deleteText :"Are you sure you want to delete this event?",
      copyText :"Are you sure you want to Copy this event?",
      eventName:"Event name: ",
      sport:"Sport: ",
      status:"Status: ",
      startDate:"Start Date: ",
      endDate:"End Date: ",
      date:"Date ",
      moreInfo:"No info"
  },
  alert:{
      noEventsFound:"No Events found...Create new one",
      noEventsUnconfirmed:"No Events found",
      noEventsFilter:"No Events found for your filters",
      noRefresh:"Dont refresh the page",
      seachOnDynamo:"[WIP] Search on Dynamo"
  },
  eventType:{
    unconfirmed:"Unconfirmed",
    scheduled:"Scheduled"
  }
}
