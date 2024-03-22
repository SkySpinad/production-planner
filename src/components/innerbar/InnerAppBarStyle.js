import { color } from "../../common/layout";

export var toolbarStyle = {
    background:"#e4f0ff00",
    width:'100%',
    height:'10vh',
    borderBottom:'2px solid '+color.blue
    
}
export var drawerStyle = {
    height:'90vh',
    position:"relative",
    backgroundColor:color.component,
    width: '0',
    flexShrink: 0,
    [`& .MuiDrawer-paper`]: { position:"relative",width: '320px', boxSizing: 'border-box', backgroundColor:"#e4f0ff00",borderRight:'2px solid '+ color.blue},
  }