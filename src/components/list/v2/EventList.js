import React from "react";
import { Divider, ListItem } from "@mui/material";
import SingleListTextItem from "../SingleListTextItem";
import SingleListAvatarItem from "../SingleListAvatarItem";
import SingleMenuItem2 from "./SingleMenuItem";
import { textStyle } from "../../../common/layout";
import SingleListAvatarCheckBoxItem from "../SingleListAvatarCheckBoxItem";
import EventEditDialog from "../../dialog/v2/EventEditDialog";
import SingleMenu from "../../menu/v2/SingleMenu";
import EventDeleteDialog from "../../dialog/v2/EventDeleteDialog";
import VerticalCentered from "../../layout/VerticalCentered";
import { eventLang, moreInfoType } from "../../../common/lang";
import { faCameraRetro, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "../../menu/MenuItem";
import RegistryDialog from "../../dialog/v2/RegistryDialog";

export default function EventList({ fieldList, event, 
    handleChange, icon, status, styleAvatar,handleDelete, handleUpdate }) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const handleClickHorizIcon = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseHorizIcon = () => {
        setAnchorEl(null);
    };
    return (
        <ListItem dense component="div"
            secondaryAction={<SingleListAvatarItem handleClickHorizIcon={handleClickHorizIcon} styleAvatar={styleAvatar} />}
        >

            <SingleListAvatarCheckBoxItem handleChange={handleChange} icon={icon} />

            {fieldList.map((item, index) => {
                if (index == 0) {
                    return <SingleListTextItem key={index} keyStyle={textStyle.value} valueStyle={textStyle.value} item={item} />
                }
                return <SingleListTextItem key={index} keyStyle={textStyle.key} valueStyle={textStyle.value} item={item} />
            }
            )}


            <SingleMenu
                id="demo-customized-menu"
                anchorEl={anchorEl}
                open={open}
                handleCloseHorizIcon={handleCloseHorizIcon}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
            >
                
            <SingleMenuItem2>
                <EventEditDialog event={event} handleEventUpdate={handleUpdate} handleClose={handleCloseHorizIcon}/>
            </SingleMenuItem2>
            <Divider sx={{ my: 0.5 }} />
            <SingleMenuItem2>
                <EventDeleteDialog event={event} handleDelete={handleDelete} handleClose={handleCloseHorizIcon}/>
            </SingleMenuItem2>
            
            <Divider sx={{ my: 0.5 }} />
            <SingleMenuItem2>
                <MenuItem handleClick={handleChange} icon={faCameraRetro} text={eventLang.element.menu.encInfo}/>
            </SingleMenuItem2>
            <Divider sx={{ my: 0.5 }} />
            <SingleMenuItem2>
                <RegistryDialog 
                    type={moreInfoType.event} 
                    data={
                        {
                            serviceKey: event.key,
                            eventId: event.key
                        }
                    }
                />
            </SingleMenuItem2>
            </SingleMenu>

        </ListItem>
    );
}

/*
            <ListItem>
               <Tooltip title="Status"><Box sx={{width:'20px',height:'20px', border:'1px solid black', borderRadius:'10px'}}></Box></Tooltip>
            </ListItem>
*/