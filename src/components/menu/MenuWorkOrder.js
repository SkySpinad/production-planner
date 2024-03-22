import React from "react";
import { Divider } from "@mui/material";
import SingleMenu from "./v2/SingleMenu";
import SingleMenuItem2 from "../list/v2/SingleMenuItem";
import { ACTION_PERMISSIONS, isPermissionDenied } from "../../common/user";
import WorkOrderPublishDialog from "../dialog/v2/WorkOrderPublishDialog";
import WorkOrderEditDialog from "../dialog/v2/WorkOrderEditDialog";
import WorkOrderDeclinedDialog from "../dialog/v2/WorkOrderDeclinedDialog";

export default function MenuWorkOrder({ handleUpdate, element, handleCloseHorizIcon, open, anchorEl }) {

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
          <WorkOrderPublishDialog
            element={element}
            handleClose={handleCloseHorizIcon}
          />
        </SingleMenuItem2>
        <SingleMenuItem2 disabled={isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor)}>
          <WorkOrderDeclinedDialog
            element={element}
            handleClose={handleCloseHorizIcon}
          />
        </SingleMenuItem2>
        <Divider sx={{ my: 0.5 }} />
        <SingleMenuItem2 disabled={isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor)}>
          <WorkOrderEditDialog
            element={element}
            handleUpdate={handleUpdate}
            handleClose={handleCloseHorizIcon}
          />
        </SingleMenuItem2>
      </SingleMenu>
    </div>
  );
}
