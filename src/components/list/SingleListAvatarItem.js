import React from "react";
import { ListItem } from "@mui/material";
import MoreVert from "@mui/icons-material/MoreVert";
import CustomIcon from "../icons/CustomIcon";

function SingleListAvatarItem({handleClickHorizIcon, styleAvatar}){


    return (
        <ListItem component="div" secondaryAction={
            <CustomIcon onClick={handleClickHorizIcon} customStyle={styleAvatar}><MoreVert /></CustomIcon>
        }>
        </ListItem>
    );

}

export default SingleListAvatarItem;
