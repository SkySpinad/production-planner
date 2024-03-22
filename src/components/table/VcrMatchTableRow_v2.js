import React from 'react';
import { DataTableBodyCell, DataTableRow } from '../DataTable/DataTable';

export default function VcrMatchTableRow_v2({ enumeration, fields, match }) {

    return (
        <DataTableRow>
            <DataTableBodyCell>{enumeration}</DataTableBodyCell>
            {fields.map(([name, data]) => (
                <DataTableBodyCell key={name}>
                    { data.template ? data.template(match[name]) :match[name] ?? '-'}
                </DataTableBodyCell>
            ))}
        </DataTableRow>
    );
};