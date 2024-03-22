import React from "react";
import CustomIcon from "../icons/CustomIcon";
import { MoreVert } from "@mui/icons-material";
import SingleMenuItem2 from "../list/v2/SingleMenuItem";
import MenuItemCustom from "../menu/MenuItem";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SingleMenu from "../menu/v2/SingleMenu";
import { vcrLang } from "../../common/lang";

export default function VcrToolBarMenu({ handleDownloadCsv }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return <div><CustomIcon onClick={handleMenu}><MoreVert /></CustomIcon>
    <SingleMenu
      id="demo-customized-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      handleCloseHorizIcon={handleClose}
    >
      <SingleMenuItem2>
          <MenuItemCustom handleClick={handleDownloadCsv} icon={faDownload} text={vcrLang.appbar.menu.download}/>
      </SingleMenuItem2>
     
    </SingleMenu>
  </div>
}