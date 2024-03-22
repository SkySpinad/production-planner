import React from "react";
import { ListItem, ListItemText, Tooltip, Typography } from "@mui/material";
import { DateToStringFormat } from "../../utils/utils";
function SingleListTextItem({item,keyStyle,valueStyle, showPreBuffer, showPostBuffer}){

    if (showPreBuffer){
      var d = new Date(Date.parse(item.value));
      d.setHours(d.getHours()-1);
    }
    if (showPostBuffer){
      var d = new Date(Date.parse(item.value));
      d.setHours(d.getHours()+1);
      
    }
    return (
      <ListItem component="div">
          <ListItemText
           primary={<Typography style={keyStyle}>{item.name}</Typography>}
           secondary={<Typography component={'span'} type="body2" style={valueStyle}>{(showPostBuffer || showPreBuffer) && DateToStringFormat(item.value) || item.value}
           {/*showPreBuffer  && <Typography component={'p'} variant={'p'} fontSize={'10px'}>PreBuffer {DateToStringFormat(d)}</Typography>}
           {showPostBuffer  && <Typography component={'p'}  variant={'p'} fontSize={'10px'}>PostBuffer {DateToStringFormat(d)}</Typography>*/}
           </Typography> }
          />
      </ListItem>
     
    );

}

export default SingleListTextItem;