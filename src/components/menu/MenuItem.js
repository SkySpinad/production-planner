import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ListItemButton, styled } from "@mui/material";
import React, { useEffect } from "react";
import { Button } from "react-rainbow-components";
import { layout, styleIconDialog } from "../../common/layout";
import './MenuItem.css'

export default function MenuItem({handleClick,icon,text,alert,color}){
    useEffect(()=>{

    },[color])
    const StyledButton = styled(Button)({
        width:'100%',
        justifyContent:'flex-start',
        color:(alert?(color?color:'red'):''),
        ...layout.menuItem,
        "&:hover":{
            color:(alert?(color?color:'red'):''),
        },
        "&:focus":{
            boxShadow:"0 0 0px white"
        }
    })
    return  <ListItemButton style={{padding:0}} onClick={handleClick} variant="base" className={alert?(color?color:'alert'):'default'}> <FontAwesomeIcon sx={{ color: styleIconDialog.Edit.color }} icon={icon} className="rainbow-m-right_medium" />
    {text}</ListItemButton>


}