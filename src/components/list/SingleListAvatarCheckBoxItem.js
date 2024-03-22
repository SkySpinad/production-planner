import React from "react";
import { ListItemAvatar, Checkbox } from "@mui/material";
import { color } from "../../common/layout";


export default function SingleListAvatarCheckBoxItem({ checkBoxId, checked, handleChange, icon, checkedIcon }) {
    
    return (
        <ListItemAvatar>
            <Checkbox
             inputProps={{ 'aria-label': 'controlled' }}
                type="checkbox"
                id={checkBoxId}
                onChange={() => handleChange(checkBoxId)}
                checked={checked}
                sx={{ alignItems: "center",color: color.blue,'&.Mui-checked':{color:color.blue}}}
                icon={icon}
                checkedIcon={checkedIcon}
            />
        </ListItemAvatar>
        );
}
