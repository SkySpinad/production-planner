import React, { useState, useEffect } from "react";
import BasicDialog from "./BasicDialog";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { eventLang, workOrderLang } from "../../../common/lang";
import MenuItem2 from "../../menu/MenuItem";
import VerticalCentered from "../../layout/VerticalCentered";
import { Button, ButtonGroup, ButtonMenu, MenuItem} from "react-rainbow-components";
import { ACTION_PERMISSIONS, isPermissionDenied } from "../../../common/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import VcrCourtList_v2 from "../../vcr/v2/VcrCourtList_v2";
import { Alert } from "@mui/material";
import { useMutation } from "@apollo/client";
import { FILL_WORKORDER } from "../../../api/graphql/mutationWorkOrder";
import { useSnackbar } from "notistack";

export default function VcrCourtEditDialog_v2({ element, handleClose }) {

    const [open, setOpen] = useState(false);
    const [courtList, setCourtList] = useState([]);
    const [checkedMatches, setCheckedMatches] = useState([]);
    const [error, setError] = useState([])
    const [feedPresentationEmpty, setFeedPresentationEmpty] = useState("");
    const [updateWorkorder] = useMutation(FILL_WORKORDER)
    const { enqueueSnackbar } = useSnackbar();
    const [listWorkorderToUpdate, setListWorkorderToUpdate] = useState([]);

    useEffect(() => {
    }, [listWorkorderToUpdate]);

    useEffect(() => {
        if(element) {
            const courts = []
            courts.push(element)
            setCourtList(courts)
        }
    }, [element]);

    useEffect(() => {
        if (feedPresentationEmpty) {
            if(validate()) {
                enqueueSnackbar("Publish Workorders", { autoHideDuration: 5000, variant: "success" });
                setOpen(false)
                handleClose()
          }
        }
      }, [feedPresentationEmpty])


    function handleOpen(){
        setOpen(!open)
    }

    function handleDialogClose(){
        handleClose()
        setOpen(false)
    }

    function unmountStates() {
        setFeedPresentationEmpty()
        setOpen(false)
        handleClose()
    }

    
    const handleSave = () => {
        console.log('listWorkorderToUpdate: ' , JSON.stringify(listWorkorderToUpdate));
        callWorkorderMutation(listWorkorderToUpdate, workOrderLang.typeAction.edithWorkorderMassive, "Edit WorkOrders")   
    }

    const handlePublish = () => {
        const listWorkorderIds = getListWorkorderIds(checkedMatches)
        callWorkorderMutation(listWorkorderIds, workOrderLang.typeAction.publishWorkorderMassive, "Publish WorkOrders")   
    }

    function getListWorkorderIds(checkedMatches) {
        const listIds = []
        checkedMatches.map(match => {
            listIds.push(match.workOrderId)
        }) 
        return listIds
    }

    function callWorkorderMutation(workOrders, action, message){
        updateWorkorder({
         variables: {
            input: {
                "action": action,
                "input": JSON.stringify( {
                  "workorderList": workOrders
                })
              }
         },
       })
       .then((response) =>{
         console.log('response: ' , response);
         if(response.data) {
           var jsonResponse = JSON.parse(response.data.fillWorkorder.response)
           if(jsonResponse.statusCode != 200) {
            enqueueSnackbar(JSON.stringify(jsonResponse.body), {autoHideDuration: 5000, variant: "error" });
           } else {     
            if(jsonResponse.body.length > 0) {
              setFeedPresentationEmpty(getWorkordersNotPublished(jsonResponse.body))
            } else {
              setFeedPresentationEmpty("Presentation and Feed data present on database")
            }
           }
         } else {
           enqueueSnackbar(response.data, { autoHideDuration: 5000, variant: "error" });
         }
       })
       .catch((error) => {
         console.log("error: ", error)
         enqueueSnackbar(error, { autoHideDuration: 5000, variant: "error" });
       });
      // unmountStates()
       
    }

    function getWorkordersNotPublished(workorderListNotPublished){
        var workorderIds = ""
        workorderListNotPublished.forEach(workorderNotPublished => workorderIds += ' '+ workorderNotPublished );
        return `${workOrderLang.dialogs.workorderCheckFeedPresentationLambdaMessage} on: ${workorderIds}` 
    }

    function handleCheckedMatches(checkedMatches) {
        setCheckedMatches(checkedMatches)
    }


    function handleUpdateMatches(list){
        setListWorkorderToUpdate(list)
    }

    function validate() {
        var errors = []
        if (feedPresentationEmpty != "Presentation and Feed data present on database") {
          errors.push(feedPresentationEmpty)
        }
        setError(errors)
        if (errors.length > 0){
            return false
        }
        return true
      }


    var footer = <div className="rainbow-flex rainbow-justify_end">
        <Button
            form="redux-form-id"
            className="rainbow-m-right_large"
            label="Cancel"
            variant="neutral"
            onClick={() => unmountStates()}
        />
        <ButtonGroup>
            <Button 
                    form="redux-form-id"
                    label="Save"
                    variant="neutral"
                    type="submit"
                    disabled = {isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor)}
                    onClick={handleSave}
            />
            <ButtonMenu
                menuAlignment="right"
                menuSize="x-small"
                icon={<FontAwesomeIcon icon={faAngleDown} className="rainbow-color_brand" />}
            >
                <MenuItem 
                    disabled = {checkedMatches.length == 0 || isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor)}
                    label="Save and Publish"
                    onClick={handlePublish} 
                />
            </ButtonMenu>
        </ButtonGroup>
    </div>


    return (
        <>
            <MenuItem2 handleClick={handleOpen} icon={faPenToSquare} text={eventLang.element.menu.edit} />
            <BasicDialog footer={footer} title={"Edit"} isOpen={open} handleClose={unmountStates} confirmLabel={"Update"} handleConfirm={handleSave}>
                <VerticalCentered>
                {error.map((el, index)=>{
                        return <Alert key={index} severity="warning" style={{ width: '100%', textAlign: 'center',justifyContent:'center' }}>{el}</Alert>
                })}
                    <VcrCourtList_v2 
                        handleUpdateMatches={handleUpdateMatches}
                        handleCheckedMatches={handleCheckedMatches}
                        isActions={false}
                        selectable={true}
                        visible={true} 
                        courts={courtList}
                        showCheckbox={true}
                        isOnlyRead={false}
                    />
                </VerticalCentered>
            </BasicDialog>
        </>
    );
}