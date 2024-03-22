import React from "react";
import { Divider } from "@mui/material";
import SingleMenu from "./v2/SingleMenu";
import SingleMenuItem2 from "../list/v2/SingleMenuItem";
import ConfigDeleteDialog from "../dialog/v2/ConfigDeleteDialog";
import SingleListAvatarItem from "../list/SingleListAvatarItem";
import ConfigEditDialog from "../dialog/v2/ConfigEditDialog";
import { ACTION_PERMISSIONS, isPermissionDenied } from "../../common/user";

export default function MenuConfig({isDefault, handleDelete, handleUpdate, data, typeConfig }) {

  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClickHorizIcon = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseHorizIcon = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <SingleListAvatarItem handleClickHorizIcon={handleClickHorizIcon} />
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
        <SingleMenuItem2 disabled={isDefault==false ? isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor) : false}>
        <ConfigEditDialog
            typeConfig={typeConfig}
            data={data}
            handleUpdate={handleUpdate}
            isDefault={isDefault}
          />
        </SingleMenuItem2>
        
        <Divider sx={{ my: 0.5 }} />
        <SingleMenuItem2 disabled={isDefault==false ? isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor) : false}>
          <ConfigDeleteDialog
            typeConfig={typeConfig}
            data={data}
            handleDelete={handleDelete}
          />
        </SingleMenuItem2>
      </SingleMenu>
    </>
  );
}
