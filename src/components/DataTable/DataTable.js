import React from "react";
import {
    SxProps,
    Table,
    TableCell,
    TableCellProps,
    TableContainer,
    TableRow,
    TableRowProps,
    Theme,
  } from '@mui/material';
  import { PropsWithChildren } from 'react';
  
  export const DataTableRow = ({ children, sx, ...props }) => (
    <TableRow
      {...props}
      sx={[
        { '&:last-child td, &:last-child th': { border: 'none' } },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </TableRow>
  );
  
  export const DataTableHeaderCell = ({
    minWidth,
    grow,
    children,
    ...props
  }) => (
    <TableCell {...props} sx={{ p: 0,textAlign:'center',  border: 'none', ...(grow && { width: '100%' }) }}>
      {children}
    </TableCell>
  );
  

  export const DataTableBodyCell = ({ maxWidth, sx = [], children }) => (
    <TableCell
      align="justify"
      sx={[{ maxWidth, px: 0,textAlign:'center', whiteSpace: 'nowrap' ,textOverflow:'ellipsis',overflow:'hidden'}, ...(Array.isArray(sx) ? sx : [sx])]}
    >
      {children}
    </TableCell>
  );
  
  export const DataTable = ({ children }) => (
    <TableContainer >
      <Table size="small" style={{tableLayout:'auto',whiteSpace:'nowrap'}}>{children}</Table>
    </TableContainer>
  );