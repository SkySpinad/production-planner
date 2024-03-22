import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';

export default function TagsDataTable({data, action, isOnlyRead, handleUpdateRows }) {

  const actionBodyTemplate = (rowData) => {
    var actionClone = React.cloneElement(action, {data:rowData})
    return (
        <>{actionClone}</>
    );
  };

    const cellEditor = (options) => {
        return <InputText style={{fontFamily:'regular'}} type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
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
          sortMode="multiple" 
          style={{width:'100%'}}
          scrollable
          removableSort 
          scrollHeight="500px" 
          size={"small"} 
          resizableColumns
          paginator
          sortField="follow" 
          sortOrder={1}
          editMode="row"
          showGridlines 
          tableStyle={{minWidth: '50rem'}} 
          rows={25} 
          rowsPerPageOptions={[5, 10, 25, 50]}>
          <Column headerStyle={{fontFamily:'regular'}} editor={(options) => cellEditor(options)} field="Id" sortable header="Id" align={'center'} style={{width:'20rem', fontFamily:'regular'}} />
          <Column headerStyle={{fontFamily:'regular'}} editor={(options) => cellEditor(options)} field="Name" sortable header="Name" align={'center'} style={{width:'20rem', fontFamily:'regular'}} />          
          <Column headerStyle={{fontFamily:'regular'}} editor={(options) => cellEditor(options)} field="Sport" sortable header="Sport" align={'center'} style={{width:'5rem', fontFamily:'regular'}} />  
          {
            !isOnlyRead && <Column rowEditor headerStyle={{ width: '1rem', minWidth: '2rem', fontFamily:'regular' }} bodyStyle={{ textAlign: 'center' }} />
          }
          {
            action && <Column body={actionBodyTemplate} headerStyle={{ width: '1rem', minWidth: '1rem' }} bodyStyle={{ textAlign: 'center' }} />
          }
        </DataTable>
    );
  }