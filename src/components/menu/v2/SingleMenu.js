import React, { useState } from "react";
import {
  Menu
} from "@mui/material";

export default function SingleMenu({
  handleCloseHorizIcon,
  anchorEl,
  open,
  actions,
  fieldListForm,
  children
}) {

  return (
    <Menu
      id="demo-customized-menu"
      MenuListProps={{
        "aria-labelledby": "demo-customized-button",
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleCloseHorizIcon}
    >
      {children}
    </Menu>
  );
}
