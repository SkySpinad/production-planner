import React from "react";
import BasicDialog from "./BasicDialog";
import { useState } from "react";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useEffect } from "react";
import { Button } from "react-rainbow-components";
import { InputText } from 'primereact/inputtext';
import DeleteIcon from '@mui/icons-material/Delete';
import { vcrLang } from "../../common/lang";
import { MenuItem } from "@giobar93/production_ui_library";
import { color } from "../../common/layout";
import { checkFieldIsempty } from "../../utils/utils";

export default function PresentationViewDialog({data, isOnlyRead, handleClose, handleUpdatePresentations }) {


    const [open, setOpen] = useState(false);
    const [presentations, setPresentations] = useState([]);

    useEffect(() => {
        if (data) {
            setPresentations(getListPresentations())
        }
    }, [data])

    useEffect(() => {
    }, [presentations])

    function handleUpdatePresentationsRows(_data) {
        setPresentations(_data)
    }

    function getListPresentations() {
        const list = []
        const presentation = data.presentation        
        if(presentation && !checkFieldIsempty(JSON.parse(data.presentation))) {
            const pres = JSON.parse(data.presentation)
            const obj = {
                id: pres.id,
                eventId: pres.eventId,
                client: pres.client,
                description: pres.description,
                ipRed: pres.presentations[0].transport.params.ipRed,
                portRed: pres.presentations[0].transport.params.portRed,
                type: pres.presentations[0].transport.type,
                source: pres.presentations[0].transport.source
            }
            list.push(obj)
        }
        return list
    }


    const onHandleClick = () => {
        setOpen(false);
    }

    function handleOpen(){
        setOpen(!open)
    }

    function handleDialogClose(){
        handleClose()
        setOpen(false)
    }

    const headerStyle = { color: '#757575' };
    
    const bodyStyle = { color: color.blue };

    const centeredStyle = { textAlign: 'center', verticalAlign: 'middle' };

    var footer = <div className="rainbow-flex rainbow-justify_end">
        <Button
            form="redux-form-id"
            className="rainbow-m-right_large"
            label="Cancel"
            variant="neutral"
            onClick={() => handleDialogClose()}
        />
        <Button
        disabled={!checkFieldIsempty(data.presentation) ? false : true}
        form="redux-form-id"
        label="Save"
        variant="brand"
        type="submit"
        onClick={handleUpdate}
        />
    </div>

    const actionBodyPresentation = (rowData) => {
       return <DeleteIcon onClick={() => handleDeletePresentation(rowData)} />
    };

    function handleDeletePresentation(rowData){
        var _presentations = presentations
        _presentations = _presentations.filter(function(item) {
            return item.id !== rowData.id
        })
        setPresentations(_presentations)
    }

    const onRowEditComplete = (e) => {
        let _data = [...presentations];
        let { newData, index } = e;
        _data[index] = newData;
       handleUpdatePresentationsRows(_data)
    };

    function handleUpdate(){
        setOpen(false);
        handleUpdatePresentations(presentations[0], data)
    }

    const textEditor = (options) => {
        return <InputText style={{width: '10rem', height: '2rem'}} type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    };
    
    return (
        <>
     <MenuItem handleClick={handleOpen} icon={faCircleInfo} text={`${vcrLang.element.menu.getPresentation} (${presentations.length})`}/>
        <BasicDialog footer={footer} title={vcrLang.dialogs.defaultViewPresentations} isOpen={open} handleClose={handleDialogClose} handleConfirm={onHandleClick} confirmLabel={'Yes'}>
        
        <DataTable
            value={presentations}
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
            <Column field="id" header="Id" headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="eventId" header="Event Id" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="client" header="Client" editor={(options) => textEditor(options)}headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="description" header="Description" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="ipRed" header="Ip Red" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="type" header="Type" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="portRed" header="Port Red" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="source" header="Source" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            {
                 !isOnlyRead && <Column rowEditor headerStyle={centeredStyle} bodyStyle={centeredStyle} />
            }            
            <Column body={actionBodyPresentation} headerStyle={{ width: '1rem', minWidth: '1rem' }} bodyStyle={{ textAlign: 'center' }} />
        </DataTable>
        </BasicDialog>        
        </>
    );
}

