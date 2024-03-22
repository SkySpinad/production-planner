import React from 'react';
import { TableBody, TableHead } from '@mui/material';
import { DataTable, DataTableHeaderCell, DataTableRow } from '../DataTable/DataTable';
import VcrMatchTableRow_v2 from './VcrMatchTableRow_v2';

const DEFAULT_WIDTH = 20;

export default function VcrMatchTable_v2_old({ fields, matches = [] }){

function getWorkOrderObjectTable(data){
  const obj = {
      workOrderId: data.workOrderId,
      eventRegion: data.eventData.eventRegion,
      startDateTime: data.eventData.startDateTime,
      endDateTime: data.eventData.endDateTime,
      courtId: data.eventData.eventAttributes.courtId,
      courtName: data.eventData.eventAttributes.courtName,
      type: data.eventData.eventAttributes.type,
      gender: data.eventData.eventAttributes.gender
  }
  return obj
}

  return <DataTable>
    <TableHead>
      <DataTableRow>
        <DataTableHeaderCell minWidth={20}>#</DataTableHeaderCell>
        {fields.map(([name, field]) => (
          <DataTableHeaderCell key={name} minWidth={field.minWidth ?? DEFAULT_WIDTH}>
            {field.title}
          </DataTableHeaderCell>
        ))}
      </DataTableRow>
    </TableHead>
    <TableBody>
      {matches.map((match, i) => (
        <VcrMatchTableRow_v2 key={i} enumeration={i + 1} fields={fields} match={getWorkOrderObjectTable(match.workOrder)} />
      ))}
    </TableBody>
  </DataTable>
}
