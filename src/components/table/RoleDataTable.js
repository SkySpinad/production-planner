import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckBoxItem from '../list/CheckBoxItem';
import { log } from 'console';

export default function RoleDataTable({ rows, menu, handleRow }) {

  const handleCellClick = (e) => {
    handleRow(e);
  }

  return (
    <>
          {
            rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell onClick={() => handleCellClick(row)} align="left">{row.rows}</TableCell>
                {row.columns.map((lr, index)=> {
                  return <TableCell key={index} align='center' >
                    <CheckBoxItem
                          defaultValue={Object.keys(lr)[0]=="Default_Role" || !Object.values(lr)[1] ? true : false}
                          disabled={true}
                          isChecked={Object.values(lr)[0]==='true' ? true : false}
                          //isChecked={Object.values(lr)[0] ? true : false}
                          checkBoxId={index.toString()}                      
                      />
                     </TableCell>
                 }
                )}

            {
                menu && <TableCell onClick={() => handleCellClick(row)}>{menu}</TableCell>
            }

                
              </TableRow>
            ))
          }
        </>
  );
}