import React from "react";
import { eventLang, moreInfoType } from "../../common/lang";
import { Divider } from "@mui/material";
import SingleMenu from "./v2/SingleMenu";
import SingleMenuItem2 from "../list/v2/SingleMenuItem";
import EventEditDialog from "../dialog/v2/EventEditDialog";
import EventDeleteDialog from "../dialog/v2/EventDeleteDialog";
import RegistryDialog from "../dialog/v2/RegistryDialog";
import MenuItem from "./MenuItem";
import { faCameraRetro } from "@fortawesome/free-solid-svg-icons";
import EventPublishDialog from "../dialog/v2/EventPublishDialog";
import EventUnconfirmedEditDialog from "../dialog/v2/EventUnconfirmedEditDialog";
import EventDuplicateDialog from "../dialog/v2/EventDuplicateDialog";
import { ACTION_PERMISSIONS, isPermissionDenied } from "../../common/user";

export default function MenuEvent({
  handleDelete,
  handleUpdate,
  handleChange,
  element,
  handleCloseHorizIcon,
  open,
  anchorEl,
  typeElement,
  handleEventDuplicate,
}) {

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
        {typeElement == "Unconfirmed" &&
          <>
          <SingleMenuItem2 disabled={isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor)}>
            <EventPublishDialog
              event={element}
              handleClose={handleCloseHorizIcon}
            />
          </SingleMenuItem2>
          <SingleMenuItem2 disabled={isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor)}>
            <EventDuplicateDialog
              event={element}
              handleEventDuplicate={handleEventDuplicate}
              handleClose={handleCloseHorizIcon}
            />
          </SingleMenuItem2>
          </>
         }



         {typeElement == "Unconfirmed" &&
        <SingleMenuItem2 disabled={isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor)}>
          <EventUnconfirmedEditDialog
            event={element}
            handleEventUpdate={handleUpdate}
            handleClose={handleCloseHorizIcon}
          />
        </SingleMenuItem2>
         ||
         <SingleMenuItem2 disabled={isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor)}>
         <EventEditDialog
           event={element}
           handleEventUpdate={handleUpdate}
           handleClose={handleCloseHorizIcon}
         />
       </SingleMenuItem2>
        } 
       
        <Divider sx={{ my: 0.5 }} />
        <SingleMenuItem2 disabled={isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor)}>
          <EventDeleteDialog
            event={element}
            handleDelete={handleDelete}
            handleClose={handleCloseHorizIcon}
          />
        </SingleMenuItem2>

        {typeElement != "Unconfirmed" &&
        <>
        <Divider sx={{ my: 0.5 }} />
        <SingleMenuItem2>
          <MenuItem
            handleClick={() => handleChange(element)}
            icon={faCameraRetro}
            text={eventLang.element.menu.encInfo}
          />
        </SingleMenuItem2>
      
        <Divider sx={{ my: 0.5 }} />
        <SingleMenuItem2>
          <RegistryDialog
            type={moreInfoType.event}
            data={{
              serviceKey: element.key,
              eventId: element.key,
            }}
          />
        </SingleMenuItem2>
        </>
          }
      </SingleMenu>
    </div>
  );
}
