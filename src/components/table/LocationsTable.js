import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { color } from '../../common/layout';
import './LocationsTable.css';
import PresentationCreateDialog from '../dialog/PresentationCreateDialog';
import PresentationViewDialog from '../dialog/PresentationViewDialog';
import CustomStatusItem from '../list/v2/CustomStatusItem';

export default function LocationsTable({ data, isOnlyRead, handleUpsertPresentation, handleUpdatePresentations}) {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleCloseHorizIcon = () => {
      setAnchorEl(null);
  };
  const openDialogCreatePresentation = (rowData) => {
    return <PresentationCreateDialog
          data={rowData}
          handleUpsertPresentation={handleUpsertPresentation}
          handleClose={handleCloseHorizIcon}
        />
  };

  const openDialogViewPresentation = (rowData) => {
    return <PresentationViewDialog
          data={rowData}
          handleUpsertPresentation={handleUpsertPresentation}
          handleClose={handleCloseHorizIcon}
          handleUpdatePresentations={handleUpdatePresentations}
        />
  };


  const viewLucidStatus = (rowData) => {
    var lucid = rowData.lucid ? rowData.lucid : null
    var message = lucid ? {statusCode: lucid.statusCode, message: lucid.message} : {statusCode: "undefined", message: "undefined"}
    return <CustomStatusItem statusLabel={message} statusType={"lucidStatus"} />
  };


  const centeredStyle = { textAlign: 'center', verticalAlign: 'middle' };

  const headerStyle = {
    color: '#757575',
  };

  const headerStatusStyle = {
    color: '#757575',
    textAlign: 'center',
    minWidth: '100%',
    maxWidth: '2rem'
  };

  const bodyStyle = {
    color: color.blue,
  };

const onRowEditComplete = (e) => {
  let _data = [...data];
  let { newData, index } = e;
  _data[index] = newData;
};

  return (
    <DataTable
      value={data}
      onRowEditComplete={onRowEditComplete}
      style={{ border: 'none', marginLeft: '50px', marginTop: '25px' }}
      scrollable
      removableSort
      scrollHeight="400px"
      size={"small"}
      sortField="follow"
      sortOrder={1}
      editMode="row"
      tableStyle={{ minWidth: '50rem', fontSize: '12px' }}
      rows={25}
    >
      <Column field="locationId" header="Location ID" headerStyle={headerStyle} bodyStyle={bodyStyle} />
      <Column field="label" header="Location Name" headerStyle={headerStyle} bodyStyle={bodyStyle} />
      {  
      <Column body={(options) => openDialogViewPresentation(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
      }
      <Column body={(options) => openDialogCreatePresentation(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
      <Column header="Lucid Status" body={(options) => viewLucidStatus(options)} headerStyle={headerStatusStyle} bodyStyle={bodyStyle} />
      {
        !isOnlyRead && <Column rowEditor headerStyle={centeredStyle} bodyStyle={centeredStyle} />
      }
    </DataTable>
  );

}