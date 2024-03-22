import React, { useState } from "react";
import {
  Menu,
  MenuItem,
  DialogContentText,
  DialogContent,
  ListItemIcon,
  Divider,
} from "@mui/material";
import BasicDialog from "../dialog/BasicDialog";
import GenericForm from "../form/GenericForm";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  actionsEvent,
  messageDeleteEvent,
  messageMoreInfoEvent,
  actionsCam,
  labelMenuToolbar,
} from "../../common/lang";
import { dialogTitle, styleIconDialog } from "../../common/layout";
import SingleListItem from "./SingleListItem";

function SingleMenuItem({
  handleCloseHorizIcon,
  anchorEl,
  open,
  actions,
  fieldListForm,
}) {

  return (
    <Menu
      id="demo-customized-menu"
      MenuListProps={{
        "aria-labelledby": "demo-customized-button",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleCloseHorizIcon}
    >
      {actions.map((action, index) => {
        return (
          <MenuItem key={index} style={{ backgroundColor: "white" }}>
            <SingleListItem action={action} />
            <BasicDialog title={action} labelLinkDialog={action}>
              {action === actionsEvent[0] && (
                <GenericForm fieldListForm={fieldListForm} />
              )}

              {action === actionsEvent[1] && (
                <DialogContent>
                  <DialogContentText sx={dialogTitle}>
                    {messageDeleteEvent}
                  </DialogContentText>
                </DialogContent>
              )}
            </BasicDialog>
          </MenuItem>
        );
      })}
      <Divider sx={{ my: 0.5 }} />
      <MenuItem>
        <ListItemIcon sx={{ color: styleIconDialog.MoreInfo.color }}>
          <MoreHorizIcon />
        </ListItemIcon>
        <BasicDialog title={labelMenuToolbar.MoreInfo} labelLinkDialog={labelMenuToolbar.MoreInfo}>
          <DialogContent>
            <DialogContentText sx={dialogTitle}>
              {messageMoreInfoEvent}
            </DialogContentText>
          </DialogContent>
        </BasicDialog>
      </MenuItem>
    </Menu>
  );
}

export default SingleMenuItem;
