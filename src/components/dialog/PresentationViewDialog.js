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
import { DateToStringFormat, checkFieldIsempty } from "../../utils/utils";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import PresentationsListHook from "../hooks/PresentationsListHook";
import { useSelector } from 'react-redux';

export default function PresentationViewDialog({data, isOnlyRead, handleClose, handleUpdatePresentations }) {

    const { enqueueSnackbar } = useSnackbar();
    const presentationList = useSelector((state) => state.presentations.data);
    const error = useSelector((state) => state.presentations.error);
    PresentationsListHook(data.locationId)

    const [open, setOpen] = useState(false);
    const [presentations, setPresentations] = useState([]);

    
    useEffect(() => {
        if (presentationList) {
            setPresentations(getListPresentations(presentationList))
        }
    }, [presentationList])

    useEffect(() => {
    }, [presentations])
   

    function getListPresentations(presentationList) {
        const list = []
        presentationList.map(pres => {
            const obj = {
                id: pres.id,
                version: pres.version,
                feedIds: pres.feedIds,
                description: pres.description,
                origin: pres.origin,
                start: DateToStringFormat(pres.start),
                end: DateToStringFormat(pres.end),
                vcrChain: pres.tags.vcrChain,
                vcrGV: pres.tags.vcrGV,
                vcrNetwork: pres.tags.vcrNetwork,
                vcrPriority: pres.tags.vcrPriority,
                vcrStage: pres.tags.vcrStage
            }
            list.push(obj)
        })
        return list
    }

    function handleUpdatePresentationsRows(_data) {
        setPresentations(_data)
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
        disabled={presentations.length > 0 ? false : true}
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
        { error && enqueueSnackbar(JSON.stringify(error), {autoHideDuration: 5000, variant: "error" })}

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
            <Column field="version" header="Version" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="feedIds" header="Feed Ids" editor={(options) => textEditor(options)}headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="description" header="Description" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="origin" header="Origin" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="start" header="Start" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="end" header="End" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="vcrChain" header="Vcr Chain" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="vcrGV" header="Vcr GV" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="vcrNetwork" header="Vcr Network" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="vcrPriority" header="Vcr Priority" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            <Column field="vcrStage" header="Vcr Stage" editor={(options) => textEditor(options)} headerStyle={headerStyle} bodyStyle={bodyStyle} />
            {
                 !isOnlyRead && <Column rowEditor headerStyle={centeredStyle} bodyStyle={centeredStyle} />
            }            
            <Column body={actionBodyPresentation} headerStyle={{ width: '1rem', minWidth: '1rem' }} bodyStyle={{ textAlign: 'center' }} />
        </DataTable>
        </BasicDialog>        
        </>
    );
}

