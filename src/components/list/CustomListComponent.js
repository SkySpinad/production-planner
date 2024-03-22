import React from "react";
import { ListItem, ListItemIcon,Tooltip  } from "@mui/material";
import SingleListTextItem from "../list/SingleListTextItem";
import SingleListAvatarTextItem from "../list/SingleListAvatarTextItem";
import SingleListAvatarItem from "../list/SingleListAvatarItem";
import SingleMenuItem from "../menu/SingleMenuItem";
import { encoderStatus, textStyle } from "../../common/layout";
import CircleIcon from '@mui/icons-material/Circle';

function CustomListComponent({checkboxId, checked, fieldList, 
                              handleChange,handleClickHorizIcon,handleCloseHorizIcon,
                              anchorEl, open, icon, checkedIcon,status, actions, styleAvatar,fieldListForm
                            }){
 
    
    return (
        <ListItem  dense component="div"
            secondaryAction={<SingleListAvatarItem handleClickHorizIcon={handleClickHorizIcon} styleAvatar={styleAvatar}/>}
        >

            <SingleListAvatarTextItem checkBoxId = {checkboxId}
                                    checked = {checked}
                                    item = {fieldList[0]}
                                    handleChange = {handleChange}
                                    icon={icon}
                                    checkedIcon={checkedIcon}                  
                                    styleAvatar={styleAvatar}
                                    />

            {fieldList.map((item, index) => {
                if (index==0){
                    return <SingleListTextItem key={index} keyStyle={textStyle.value} valueStyle={textStyle.value} item ={item}/>
                }
                return <SingleListTextItem key={index} keyStyle={textStyle.key} valueStyle={textStyle.value} item ={item}/>
            }
            )}

            {status && 
            <ListItem>
                <ListItemIcon>
                <Tooltip
                    title={
                    <h3 className = "tooltip-customList">{status}</h3>
                }
                arrow
                >
                    {<CircleIcon  sx = {encoderStatus[status]}/> }
                </Tooltip>
                </ListItemIcon>
            </ListItem>

            }
            

            <SingleMenuItem handleCloseHorizIcon={handleCloseHorizIcon}
                            anchorEl={anchorEl}
                            open = {open}
                            actions={actions}
                            fieldListForm={fieldListForm}
            />
        </ListItem>
    );
}

export default CustomListComponent;

/*
            <ListItem>
               <Tooltip title="Status"><Box sx={{width:'20px',height:'20px', border:'1px solid black', borderRadius:'10px'}}></Box></Tooltip>
            </ListItem>
*/