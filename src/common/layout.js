export const color = {
    blue: "#133c70",
    background: "#0533d6",
    component: "#E4F0FF",
    element: "#E4F0FF",
    baseL2: "#5a6792",
    baseL3: "#9396b5",
    baseL4: "#c9c9d9",
    baseL5: "#ffffff",
    red:"#840000"
}

export const styleIconDialog = {
    Edit: {
        name: "Edit",
        color: "deepskyblue",
        fontSize: "30px"
    },
    Delete: {
        name: "Delete",
        color: "palevioletred",
        fontSize: "30px"
    },
    MoreInfo: {
        name: "MoreInfo",
        color: "green",
        fontSize: "30px"
    },
    Unknown: {
        name: "Unknown",
        color: "grey",
        fontSize: "30px"
    },

}

export const statusColor = {
    blue: "#044088",
    green: "#039500",
    lightGreen: "#0395003d",
    red:"#840000",
    yellow: "#FFAC0C",
    ligthYellow: "#ffdfa2",
    grey: "#6c757d",
    lightBlue:color.element
}

export const styleAvatar = {
    color: "#133c70",
    border: '1px solid #133c70',
    //borderRadius: '15px'
}

export const backgroundColor = {
    blue: "#133c70",
    background: "#0533d6",
    component: "#E4F0FF",
    element: "#E4F0FF",
    baseL2: "#5a6792",
    baseL3: "#9396b5",
    baseL4: "#c9c9d9",
    baseL5: "#ffffff",
    red:"#840000"
}

export const rainbowTheme = {
        rainbow: {
            palette: {
                brand: color.blue,
                mainBackground: "#fffff",
                success: '#44d7b6',
                error: '#f14336',
                warning: '#f7b500',
    
            }
        }
}

export const innerAppBar = {
    content: {zIndex: -2, flexGrow: 1, color: color.blue,display: "flex",    justifyContent: "center",    alignItems: "center",    position: "absolute",  right: 0, left: 0 }
}

export const dateInputText = {
    value: "white"
}
export const layout = {
    boxRightContainer:{  overflowY: "scroll",maxHeight: "75vh",marginBottom:'100px'},
    checked: "3px solid red",
    unchecked: "none",
    filterActive: { color: color.blue, border: '1px solid ' + color.blue, borderRadius: '10px' },
    filterInactive: { color: 'grey', border: '1px solid grey', borderRadius: '10px', disabled: 'true' },
    activeButton: { color: color.blue, border: '1px solid '+color.blue, borderRadius: '10px' },
    dialog:{
        backgroundColor: "#133c70",
        borderRadius: "10px",
        height: "100%",
        width:'100%'
      },
    menuItem : {    padding: "0px",border:"none", margin: "0px",  lineHeight: "0px",'&:focus':{boxShadow: "0 0 5px red"}, width:'100%',
    justifyContent:'flex-start',}
}

export const encoderStatus = {
    20: {
        name: "Start",
        color: statusColor.green,
        fontSize: "20px",
        key:'Started'
    },
    21: {
        name: "Start",
        color: statusColor.green,
        fontSize: "20px",
        key:'Started'
    },
    10: {
        name: "Start",
        color: statusColor.green,
        fontSize: "20px",
        key:'Started'
    },
    Started: {
        name: "Start",
        color: statusColor.green,
        fontSize: "20px",
        key:'Started'
    },
    Delete: {
        name: "Delete",
        color: statusColor.red,
        fontSize: "20px",
        key:'Delete'
    },
    Stopped: {
        name: "Stop",
        color: statusColor.grey,
        fontSize: "20px",
        key:'Stopped'
    },
    80: {
        name: "Stop",
        color: statusColor.red,
        fontSize: "20px",
        key:'Stopped'
    },
    90: {
        name: "Stop",
        color: statusColor.red,
        fontSize: "20px",
        key:'Stopped'
    },
    500: {
        name: "Stop",
        color: statusColor.red,
        fontSize: "20px",
        key:'Stopped'
    },
     Waiting: {
        name: "Waiting",
        color: statusColor.lightGreen,
        fontSize: "20px",
        key:'Waiting'
    },
    0: {
        name: "Waiting",
        color: statusColor.lightGreen,
        fontSize: "20px",
        key:'Waiting'
    },
    3: {
        name: "Waiting",
        color: statusColor.lightGreen,
        fontSize: "20px",
        key:'Waiting'
    },
    5: {
        name: "Waiting",
        color: statusColor.lightGreen,
        fontSize: "20px",
        key:'Waiting'
    },
    Undefined: {
        name: "Undefined",
        color: statusColor.grey,
        fontSize: "20px",
        key:'Undefined'
    }
}

export const lucidStatus = {
    2: {
        name: "configurationsPresent",
        color: statusColor.green,
        fontSize: "20px",
        key:'2'
    },
    0: {
        name: "configurationMissed",
        color: statusColor.red,
        fontSize: "20px",
        key:'0'
    },
    1: {
        name: "configurationSemiMissed",
        color: statusColor.yellow,
        fontSize: "20px",
        key:'1'
    },
    undefined: {
        name: "undefined",
        color: statusColor.grey,
        fontSize: "20px",
        key:'undefined'
    }
}

export const vcrStatus = {
    Started: {
        name: "Start",
        color: statusColor.green,
        fontSize: "20px",
        key:'Started'
    },
    Delete: {
        name: "Delete",
        color: statusColor.red,
        fontSize: "20px",
        key:'Delete'
    },
    Stopped: {
        name: "Stop",
        color: statusColor.grey,
        fontSize: "20px",
        key:'Stopped'
    },
     Waiting: {
        name: "Waiting",
        color: statusColor.yellow,
        fontSize: "20px",
        key:'Waiting'
    },
    Undefined: {
        name: "Undefined",
        color: statusColor.grey,
        fontSize: "20px",
        key:'Undefined'
    }
}

export const otherStatus = {
    Started: {
        name: "Start",
        color: statusColor.green,
        fontSize: "20px",
        key:'Started'
    },
    Delete: {
        name: "Delete",
        color: statusColor.red,
        fontSize: "20px",
        key:'Delete'
    },
    Stopped: {
        name: "Stop",
        color: statusColor.grey,
        fontSize: "20px",
        key:'Stopped'
    },
     Waiting: {
        name: "Waiting",
        color: statusColor.yellow,
        fontSize: "20px",
        key:'Waiting'
    },
    Undefined: {
        name: "Undefined",
        color: statusColor.grey,
        fontSize: "20px",
        key:'Undefined'
    }
}















