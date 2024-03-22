import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Locations from '../location/Locations';

export default function Days() {

  const [open, setOpen] = useState(false);

  const daysList = useSelector((state) => state.days.data);

  const dispatch = useDispatch();

  const getLocations = (id) => {
    setOpen(true)
  };

  return <>
   <TableContainer>
      <Table sx={{ maxWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID DAY</TableCell>
            <TableCell align="left">Name DAY</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { daysList.map((day) => (
            <TableRow key={day.id} onClick={() => getLocations({ id: day.id })}>
              <TableCell align="left">{day.id}</TableCell>
              <TableCell align="left">{day.name}</TableCell>
              <TableCell align="left">
                <Button variant="outlined" startIcon={<DeleteIcon />} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    { open &&
      <Locations /> 
    }
  </>
 
};

