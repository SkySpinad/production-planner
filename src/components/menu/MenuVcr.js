import React from "react";
import SingleMenu from "./v2/SingleMenu";
import SingleMenuItem2 from "../list/v2/SingleMenuItem";
import { ACTION_PERMISSIONS, isPermissionDenied } from "../../common/user";
import VcrLucidEventEditDialog from "../dialog/v2/VcrLucidEventEditDialog";

export default function MenuVcr({ handleUpdateCompetition, element, handleCloseHorizIcon, open, anchorEl }) {

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
          <VcrLucidEventEditDialog
            element={element}
            handleUpdateCompetition={handleUpdateCompetition}
            handleClose={handleCloseHorizIcon}
          />
        </SingleMenuItem2>
      </SingleMenu>
    </div>
  );
}
