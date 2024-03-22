import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {

  Stack,
  styled,
} from "@mui/material";
import {   innerAppBar} from "../../common/layout";
import { drawerStyle, toolbarStyle } from "./InnerAppBarStyle";

const drawerWidth = 320;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `${drawerWidth}px`,
    }),
  })
);

export default function InnerAppBar({
  title,
  date,
  children,
  headerStartComponent,
  sidebar,
  menu
}) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };
  const head = React.cloneElement(headerStartComponent, {
    handleDrawerOpen: handleDrawerOpen,
    style: {position: 'absolute', left: '10px'}
  });


  return ( <Box sx={{ display: 'flex',flexDirection:"column"}}>
    <CssBaseline />
    <Toolbar sx={toolbarStyle}>
      {head}
        <Stack direction={'column'} sx={innerAppBar.content}>
        <Typography variant="h5" component="div" sx={{fontWeight:'bold', flexGrow: 1,textAlign:'center' }}>
           {title}
        </Typography>
        {date &&
          <Typography component="div" sx={{ fontSize: 14,flexGrow: 1,textAlign:'center' }}>
          {date}
          </Typography>
        }
       
        </Stack>
      
          <div style={{position:'absolute', right:'10px'}}> 
            {menu}
          </div>
      
      </Toolbar>
    <Box sx={{ display: 'flex'}}>
    <Drawer
      variant="persistent"
      open={open}
      transitionDuration={{ enter: 0, exit: 0 }}
      sx={drawerStyle}
    >
      {sidebar}
   
    </Drawer>
      <Main open={open}>
        {children}         
      </Main>
    </Box>
    </Box>
  );
}
