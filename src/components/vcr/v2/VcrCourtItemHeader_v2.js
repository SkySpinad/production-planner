import React from "react";
import PropType from "prop-types"
import { Typography, Stack, ListItemText } from '@mui/material';
import MetadataTable from "../../MetadataTable/MetadataTable";
import { CourtClass, encoderField } from "../classes/v2/CourtClass";
import MenuVcr_v2 from "../../menu/MenuVcr_v2";
import { styleAvatar } from "../../../common/layout";
import SingleListAvatarItem from "../../list/SingleListAvatarItem";

export default function VcrCourtItemHeader_v2({handleShowDetails, data, isActions, checkbox}){

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleCloseHorizIcon = () => {
      setAnchorEl(null);
  };

  const handleMenu = (encoder) => {
    setAnchorEl(encoder.currentTarget);
  }

    return (
        <>
        <Stack direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}>
            <Stack direction="row" alignItems="center" justifyContent={"flex-start"} style={{minWidth:'20%'}}>
                <Typography 
                    variant="h6" 
                    style={{display:'inline'}}
                >
                    {checkbox}
                </Typography>
            <ListItemText onClick={handleShowDetails}
                primary={
                    <Typography  variant="subtitle1" >
                        <Stack 
                            direction="row">
                                <span>{data.id}</span>
                        </Stack>
                    </Typography>
                }
                secondary={<Typography  variant="h5">
                        {data.name}
                    </Typography>}
            />
            
          </Stack>
           <MetadataTable fields={encoderField} metadata={data}  />
        
          </Stack>
        </>
      );
}

VcrCourtItemHeader_v2.propsType = {
    encoder: PropType.instanceOf(CourtClass)
}
