import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function Locations() {
  
  const locationList = useSelector((state) => state.locations.data);

  const dispatch = useDispatch();

  return <>
   <TableContainer>
      <Table sx={{ maxWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID LOCATION</TableCell>
            <TableCell align="left">Name LOCATION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { locationList.map((comp) => (
            <TableRow key={comp.id}>
              <TableCell align="left">{comp.id}</TableCell>
              <TableCell align="left">{comp.name}</TableCell>
              <TableCell align="left">
                <Button variant="outlined" startIcon={<DeleteIcon />} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </>
 
};

