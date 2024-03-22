import React from "react";
import { Divider, ListItem } from "@mui/material";
import SingleListTextItem from "../SingleListTextItem";
import SingleListAvatarItem from "../SingleListAvatarItem";
import SingleMenuItem2 from "./SingleMenuItem";
import { encoderStatus, encoderStyle, textStyle } from "../../../common/layout";
import SingleListAvatarCheckBoxItem from "../SingleListAvatarCheckBoxItem";
import SingleMenu from "../../menu/v2/SingleMenu";
import EncoderStartStopSingleDialog from "../../dialog/v2/EncoderStartStopSingleDialog";
import { faCirclePlay, faCircleStop } from "@fortawesome/free-solid-svg-icons";
import { moreInfoType } from "../../../common/lang";
import RegistryDialog from "../../dialog/v2/RegistryDialog";


export default function EncoderList({checkboxId, checked, fieldList,
                              handleChange,icon, checkedIcon, styleAvatar,encoder, startStopSingleCam, event
                            }){

    const [anchorEl, setAnchorEl] = React.useState(null);
    

    const handleClickHorizIcon = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleCloseHorizIcon = () => {
        setAnchorEl(null);
      }
    const open = Boolean(anchorEl);
    return (
        <ListItem  dense component="div"
            secondaryAction={<SingleListAvatarItem handleClickHorizIcon={handleClickHorizIcon} styleAvatar={styleAvatar}/>}
        >

            <SingleListAvatarCheckBoxItem checkBoxId = {checkboxId}
                                    checked = {checked}
                                    item = {fieldList[0]}
                                    handleChange = {handleChange}
                                    icon={icon}
                                    checkedIcon={checkedIcon}                  
                                    styleAvatar={styleAvatar}
                                    />

            {fieldList.map((item, index) => {
                if (index==0){
                    return <SingleListTextItem key={index} keyStyle={textStyle.encoderName} valueStyle={textStyle.value} item ={item}/>
                }
                if (index == 2){
                    return <SingleListTextItem key={index} keyStyle={textStyle.key} valueStyle={textStyle.value} item ={item} showPreBuffer/>
                }
                if (index == 3){
                    return <SingleListTextItem key={index} keyStyle={textStyle.key} valueStyle={textStyle.value} item ={item} showPostBuffer/>
                }
                if (index == 4){
                    return <SingleListTextItem key={index} keyStyle={textStyle.encoderName} valueStyle={textStyle.value} item ={item}/>
                }
                return <SingleListTextItem key={index} keyStyle={textStyle.key} valueStyle={textStyle.value} item ={item}/>
            }
            )}


            <SingleMenu
                id="demo-customized-menu"
                anchorEl={anchorEl}
                open={open}
                handleCloseHorizIcon={handleCloseHorizIcon}
            >
            <SingleMenuItem2>
                <EncoderStartStopSingleDialog icon={faCirclePlay}
                                          color={'green'}
                                          statusToChange={encoderStatus.Started} 
                                          encoder={encoder}
                                          handleChange={startStopSingleCam}/>
            </SingleMenuItem2>
            <SingleMenuItem2 /*disabled={new Date() < SubtractMinutesToDate(new Date(event.date), prebuffer)}*/>
                <EncoderStartStopSingleDialog icon={faCircleStop} 
                                          statusToChange={encoderStatus.Stopped} 
                                          encoder={encoder}
                                          handleChange={startStopSingleCam}/>
            </SingleMenuItem2>
            <Divider sx={{ my: 0.5 }} />
            <SingleMenuItem2>
                <RegistryDialog type={moreInfoType.encoder} data={encoder}/>
        
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