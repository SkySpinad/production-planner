import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteCompetition } from '../../store/slices/competitionSlice';
import Days from '../days/Days';

export default function Competitions() {

  const [open, setOpen] = useState(false);

  const competitionList = useSelector((state) => state.competitions.data);

  const dispatch = useDispatch();

  const deleteCompetitionHandler = (id) => {
    dispatch(deleteCompetition(id));
  };

  const getDays = (id) => {
    setOpen(true)
  };

  return <>
   <TableContainer>
      <Table sx={{ maxWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">ID</TableCell>
            <TableCell align="left">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { competitionList.map((comp) => (
            <TableRow key={comp.id} onClick={() => getDays({ id: comp.id })}>
              <TableCell align="left">{comp.id}</TableCell>
              <TableCell align="left">{comp.name}</TableCell>
              <TableCell align="left">
                <Button onClick={() => deleteCompetitionHandler({ id: comp.id })} variant="outlined" startIcon={<DeleteIcon />} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    { open &&
      <Days /> 
    }
</>
    
};

