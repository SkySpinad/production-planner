import React from "react";
import { TableBody, TableHead } from '@mui/material';
import { DataTable, DataTableBodyCell, DataTableHeaderCell, DataTableRow } from '../DataTable/DataTable';

export default function MetadataTable({ fields, metadata }) {

  return (
    <DataTable>
      <TableHead>
        <DataTableRow>
          {fields.map(([name, field]) => {
            if (metadata[name] !== undefined) {
              return <DataTableHeaderCell key={name} minWidth={field.minWidth ?? 150}>
                {field.title}
              </DataTableHeaderCell>
            }
          })}
        </DataTableRow>
      </TableHead>
      <TableBody>
        <DataTableRow>
          {fields.map(([name, data]) => {
            var value = metadata[name]
            if (data.isObject == true) {
              value = metadata
            }
            if (value !== undefined) {
              return <DataTableBodyCell key={name}>{data.template ? data.template(value) : value ?? '-'}</DataTableBodyCell>
            }

          })}
        </DataTableRow>
      </TableBody>
    </DataTable>
  );
};