import React from "react";
import { ListItemAvatar, Checkbox } from "@mui/material";


function SingleListAvatarTextItem({ checkBoxId, checked, item, handleChange, icon, checkedIcon, styleAvatar }) {

    return (
       
            <ListItemAvatar>
                
                <Checkbox
                    type="checkbox"
                    name="category-input"
                    id={checkBoxId}
                    onChange={() => handleChange(checkBoxId)}
                    checked={checked}
                    sx={{ alignItems: "center" }}
                    icon={icon}
                    checkedIcon={checkedIcon}
                />
            </ListItemAvatar>

    );
}

export default SingleListAvatarTextItem;