import React from "react";
import SingleMenu from "./v2/SingleMenu";
import SingleMenuItem from "../list/v2/SingleMenuItem";
import EncoderDeleteDialog from "../dialog/v2/EncoderDeleteDialog";

export default function MenuUnconfirmedEncoder({
  handleCloseHorizIcon,
  open,
  anchorEl,
  encoder, 
  handleDeleteEncoder
}) {

  return (
    <>
       <SingleMenu
                id="demo-customized-menu"
                anchorEl={anchorEl}
                open={open}
                handleCloseHorizIcon={handleCloseHorizIcon}
            >
            <SingleMenuItem>
              <EncoderDeleteDialog encoder={encoder}
                                   handleClose={handleCloseHorizIcon}
                                   handleDeleteEncoder={handleDeleteEncoder}
              />
            </SingleMenuItem>
        
            </SingleMenu>
    </>
  );
}
