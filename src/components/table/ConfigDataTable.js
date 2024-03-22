import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

export default function ConfigDataTable({dataConfig, action, viewmenuselect, isOnlyRead, remainingListServiceKey, handleUpdateRows }) {

   const menuTemplate = (rowData) => {
    var listServiceKey = []
    remainingListServiceKey.map(el=> listServiceKey.push(el.value))
    return <Dropdown
            style={{minWidth:'14rem', fontFamily:'regular'}}
            value={rowData.value}
            options={listServiceKey}
            onChange={(e) => rowData.editorCallback(e.value)}
            placeholder="Select Service Key"
            showClear
            itemTemplate={(option) => (
              <div style={{fontFamily:'regular'}}>{option}</div>
            )}
          />  
    };


 
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
      let _dataConfig = [...dataConfig];
      let { newData, index } = e;
      _dataConfig[index] = newData;
      handleUpdateRows(_dataConfig)
  };

    return (
        <DataTable 
          value={dataConfig}
          onRowEditComplete={onRowEditComplete}
          sortMode="multiple" 
          style={{width:'100%'}}
          scrollable
          removableSort 
          scrollHeight="400px" 
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
          <Column headerStyle={{fontFamily:'regular'}} editor={(options) => cellEditor(options)} field="Label" sortable header="Label" align={'center'} style={{width:'20rem', fontFamily:'regular'}} />
          <Column headerStyle={{fontFamily:'regular'}} editor={(options) => cellEditor(options)} field="Name" sortable header="Name" align={'center'} style={{width:'20rem', fontFamily:'regular'}} />          
          { viewmenuselect &&
            <Column headerStyle={{fontFamily:'regular'}} editor={(options) => menuTemplate(options)} header="Service Key" sortable field="ServiceKey" align={'center'} style={{width:'5rem', fontFamily:'regular'}} />  
          ||
          <Column headerStyle={{fontFamily:'regular'}} editor={(options) => cellEditor(options)} field="ServiceKey" sortable header="Service Key" align={'center'} style={{width:'5rem', fontFamily:'regular'}} />  
          }
          {
            !isOnlyRead && <Column rowEditor headerStyle={{ width: '1rem', minWidth: '2rem', fontFamily:'regular' }} bodyStyle={{ textAlign: 'center' }} />
          }
          {
            action && <Column body={actionBodyTemplate} headerStyle={{ width: '1rem', minWidth: '1rem' }} bodyStyle={{ textAlign: 'center' }} />
          }
        </DataTable>
    );
  }