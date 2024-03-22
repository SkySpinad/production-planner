import React from "react";
import SingleMenu from "./v2/SingleMenu";
import SingleMenuItem2 from "../list/v2/SingleMenuItem";
import { ACTION_PERMISSIONS, isPermissionDenied } from "../../common/user";
import VcrCourtEditDialog_v2 from "../dialog/v2/VcrCourtEditDialog_v2";

export default function MenuVcr_v2({ handleCloseHorizIcon, open, anchorEl, element }) {

  return (
    <div>
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
        <SingleMenuItem2 disabled={isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor)}>
          <VcrCourtEditDialog_v2
            element={element}
            handleClose={handleCloseHorizIcon}
          />
        </SingleMenuItem2>
      </SingleMenu>
    </div>
  );
}
