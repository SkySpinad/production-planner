import React from "react";
import { ListItemIcon } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  subActionsAppBar,
  actionsEvent,
  actionsCam,
  actionsAppBar,
} from "../../common/lang";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { encoderStatus, styleIconDialog } from "../../common/layout";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const SingleListItem = ({ action }) => {
  switch (action) {
    case subActionsAppBar[0]:
      return (
        <ListItemIcon>
          <PlayCircleOutlineIcon sx={{ color: encoderStatus.Started.color }} />
        </ListItemIcon>
      );
    case subActionsAppBar[1]:
      return (
        <ListItemIcon>
          <PlayCircleOutlineIcon sx={{ color: encoderStatus.Stopped.color }} />
        </ListItemIcon>
      );
    case subActionsAppBar[2]:
      return (
        <ListItemIcon>
          <PlayCircleFilledIcon sx={{ color: encoderStatus.Started.color }} />
        </ListItemIcon>
      );
    case subActionsAppBar[3]:
      return (
        <ListItemIcon>
          <PlayCircleFilledIcon sx={{ color: encoderStatus.Stopped.color }} />
        </ListItemIcon>
      );
    case actionsAppBar[0]:
      return (
        <ListItemIcon>
          <PlayCircleFilledIcon sx={{ color: encoderStatus.Started.color }} />
        </ListItemIcon>
      );
    case actionsAppBar[1]:
      return (
        <ListItemIcon>
          <PlayCircleFilledIcon sx={{ color: encoderStatus.Stopped.color }} />
        </ListItemIcon>
      );
    case actionsCam[0]:
      return (
        <ListItemIcon sx={{ color: encoderStatus.Started.color }}>
          <IosShareOutlinedIcon />
        </ListItemIcon>
      );
    case actionsCam[1]:
      return (
        <ListItemIcon sx={{ color: encoderStatus.Stopped.color }}>
          <IosShareOutlinedIcon />
        </ListItemIcon>
      );
    case actionsEvent[0]:
      return (
        <ListItemIcon sx={{ color: styleIconDialog.Edit.color }}>
          <EditIcon />
        </ListItemIcon>
      );
    case actionsEvent[1]:
      return (
        <ListItemIcon sx={{ color: styleIconDialog.Delete.color }}>
          <DeleteForeverIcon />
        </ListItemIcon>
      );
    default:
      return (
        <ListItemIcon sx={{ color: styleIconDialog.Unknown.color }}>
          <MoreHorizIcon />
        </ListItemIcon>
      );
  }
};

export default SingleListItem;
