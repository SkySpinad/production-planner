import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { color } from './common/layout';

export const theme = createTheme({
  typography: {
    fontFamily: ['DM Sans', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    //fontSize:15,
    h2: {
      fontSize: 17,
      fontWeight: 500,
    },
    h3: {
      fontSize: 16,
      fontWeight: 500,
    },
    h6: {
      fontSize: 14,
      fontWeight: 500,
    },
    body1: {
      fontSize: 15,
      fontWeight: 500,
    },
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#0068a9',
    },
    background: {
      default: '#f7f7f7',
    },
    success: {
      main: '#5f944a',
    },
    warning: {
      main: '#cb923e',
    },
    subtle: {
      main: grey[300],
    },
    status: {
      failed: '#DE4A36',
      missingData: '#DE4A36',
      rejected: '#DE4A36',
      onHold: '#F09131',
      submitted: '#0068A9',
      pending: '#888888',
      acknowledged: '#CB923E',
      published: '#5F944A',
      manualRX: '#CB923E',
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
        color: color.blue
      },
    },
    MuiLoadingButton: {
      defaultProps: {
        size: 'small',
        disableElevation: true,
        variant: 'contained',
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: 'small',
        variant: 'contained',
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme }) => ({
          backgroundColor: theme.palette.common.white,
        }),
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: ({ theme }) => ({
          fontSize: 13,
          color: theme.palette.grey[600],
        }),
        body: {
          fontSize: 12,
          padding:0,
          fontWeight: 500,
          color: color.blue
        },
      },
    },
    MuiTypography:{
      styleOverrides:{
        root:({theme})=>({
          color:color.blue,
          fontSize: '0.8rem',
          
        }),
        subtitle1:({theme})=>({
          fontSize:'0.7rem',
          color:theme.palette.grey[600]
        }),
        h6:({theme})=>({
          fontSize:'0.8rem',
          color:color.blue,
        }),
        h5:({theme})=>({
          fontSize:'1.2rem',
          color:color.blue,
        })
      }
    },
    MuiListItemText: {
      styleOverrides: {
        root: ({ theme }) => ({
          //backgroundColor: theme.palette.common.white,
        }),
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
        },
      },
    },
  },
});