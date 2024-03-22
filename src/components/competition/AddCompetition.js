import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { create_UUID } from '../../utils/utils';
import { Box, Button, TextField } from '@mui/material';
import { addCompetition } from '../../store/slices/competitionSlice';

export default function AddCompetition() {

  const [name, setName] = useState('');

  const dispatch = useDispatch();

  const handleAddCompetition = (e) => {
    e.preventDefault();
    dispatch(addCompetition({ name, id: create_UUID() }));
  };

  return <Box height={50} width={400} my={4} display="flex" alignItems="center" gap={4} p={2}>
        <TextField color="primary" label="Name" variant="standard" onChange={(e) => setName(e.target.value)}/>
        <Button onClick={handleAddCompetition}> Add Competition</Button>
      </Box>
}
