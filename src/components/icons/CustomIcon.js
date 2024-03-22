import { IconButton, Tooltip } from '@mui/material';
import React from 'react';
import { layout } from '../../common/layout';
export default function CustomIcon({children,onClick,tooltipText,customStyle, disabled, disabledIcon}){
   
    if (!customStyle){
        customStyle = layout.activeButton
    }
    return ( 
        <Tooltip title={tooltipText}>
            <IconButton disabled={disabledIcon} onClick={onClick} sx={customStyle} disableTouchRipple={disabled} disableFocusRipple={disabled}>
                {children}
            </IconButton>
        </Tooltip>
    )
}