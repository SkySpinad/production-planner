import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { color } from '../../common/layout';
import './VcrDataTable.css'
import { InputText } from 'primereact/inputtext';
import VcrPresentationCreateDialog from '../dialog/v2/VcrPresentationCreateDialog';
import VcrPresentationViewDialog from '../dialog/v2/VcrPresentationViewDialog';

export default function VcrDataTable({ data, isOnlyRead, handleUpdateRows, handleUpsertPresentation, handleUpdatePresentations}) {


  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleCloseHorizIcon = () => {
      setAnchorEl(null);
  };
  const openDialogCreatePresentation = (rowData) => {
    return <VcrPresentationCreateDialog
          data={rowData}
          handleUpsertPresentation={handleUpsertPresentation}
          handleClose={handleCloseHorizIcon}
        />
  };

  const openDialogViewPresentation = (rowData) => {
    return <VcrPresentationViewDialog
          data={rowData}
          handleUpsertPresentation={handleUpsertPresentation}
          handleClose={handleCloseHorizIcon}
          handleUpdatePresentations={handleUpdatePresentations}
        />
  };

  const centeredStyle = { textAlign: 'center', verticalAlign: 'middle' };

  const headerStyle = {
    color: '#757575',
  };

  const bodyStyle = {
    color: color.blue,
  };

  const textEditor = (options) => {
    return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
  };

const onRowEditComplete = (e) => {
  let _data = [...data];
  let { newData, index } = e;
  _data[index] = newData;
  handleUpdateRows(_data)
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
      <Column field="courtName" header="Court Name" headerStyle={headerStyle} bodyStyle={bodyStyle} />
      <Column field="feedId" header="Feed" headerStyle={headerStyle} bodyStyle={bodyStyle} />
      <Column body={(options) => openDialogViewPresentation(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
      <Column body={(options) => openDialogCreatePresentation(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
      {
        !isOnlyRead && <Column rowEditor headerStyle={centeredStyle} bodyStyle={centeredStyle} />
      }
    </DataTable>
  );
}