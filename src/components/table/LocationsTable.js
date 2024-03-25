import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { color } from '../../common/layout';
import CustomStatusItem from '../list/v2/CustomStatusItem';
import HorizontalCentered from '../layout/HorizontalCentered';

export default function LocationsTable({ data }){

  const headerStyle = { color: '#757575' };
  const bodyStyle = { color: color.blue };
  const tableStyle = { minWidth: '100%' , fontSize: '12px' };

  useEffect(() => {

  }, [data]);

  
  const actionBodyPresentation = (rowData) => {
    return <HorizontalCentered>
    <CustomStatusItem encoder={rowData} />
    <CustomStatusItem encoder={rowData} />
    <CustomStatusItem encoder={rowData} />
    </HorizontalCentered>
 };

  return <DataTable
    value={data}
    style={{ border: 'none', marginLeft: '50px', marginTop: '25px' }}
    scrollable
    removableSort
    scrollHeight="400px"
    size={"small"}
    sortField="follow"
    sortOrder={1}
    editMode="row"
    tableStyle={tableStyle}
    rows={25}
  >
    <Column field="id" header="Location ID" headerStyle={headerStyle} bodyStyle={bodyStyle} />
    <Column field="name" header="Location Name" headerStyle={headerStyle} bodyStyle={bodyStyle} />
    <Column body={actionBodyPresentation} headerStyle={headerStyle} bodyStyle={bodyStyle} />
  
  </DataTable>
}
