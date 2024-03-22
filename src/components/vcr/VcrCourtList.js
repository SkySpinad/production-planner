import React, { useEffect, useState }from 'react'
import { Accordion, AccordionDetails} from '@mui/material'
import VcrDataTable from '../table/VcrDataTable';
import { useMutation } from '@apollo/client';
import { LIST_COURTS_BY_COMPETITIONS, FILL_WORKORDER } from '../../api/graphql/mutationWorkOrder';
import { Button } from "react-rainbow-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { useSnackbar } from "notistack";
import { vcrLang } from '../../common/lang';
import { getActualCourtList } from '../../services/serviceDB';
import { checkFieldIsempty } from '../../utils/utils';

export default function VcrCourtList({ element, visible }) {


  const [rowSelected, setRowSelected] = useState([]);
  const[getCourtsByEventGroupId] = useMutation(LIST_COURTS_BY_COMPETITIONS)
  const [upsertPresentationAndFeed] = useMutation(FILL_WORKORDER)
  const { enqueueSnackbar } = useSnackbar();


  function getCourts(eventGroupId){
    getCourtsByEventGroupId({
      variables: {
          "eventGroupId": eventGroupId
      },
      fetchPolicy: 'no-cache',
    }).then((response) => {
      console.log('response courts: ' , response.data.getCourtsByCompetitionId.items);
      setRowSelected(response.data.getCourtsByCompetitionId.items)
    })
  }


  function handleUpdateRows(listUpdated) {
    const list = []
    listUpdated.map(el => {
      const objUpsertCourt = {
        "country":el.country == null ? "null" : el.country,
        "courtId":el.courtId,
        "courtName":el.courtName,
        "eventGroupId":el.eventGroupId,
        "feedId":el.feedId,
        "presentation":el.presentation,
      }
      list.push(objUpsertCourt)
    })
    setRowSelected(list)
  }

  function handleUpdate(){
    const list = []
    rowSelected.map(el=> {
      const objUpsertCourt = {
        "country":el.country,
        "courtId":el.courtId,
        "courtName":el.courtName,
        "eventGroupId":el.eventGroupId,
        "feedId":el.feedId,
        "presentation": checkFieldIsempty(el.presentation) ? null : JSON.parse(el.presentation)
      }
      list.push(objUpsertCourt)
    })
    callPresentationAndFeedMutation(list, vcrLang.typeAction.editCourt, "Edited Court")
  }

  function handleUpdatePresentations(presentations, court){
    const list = []
    const objUpsertCourt = {
      "country":court.country,
      "courtId":court.courtId,
      "courtName":court.courtName,
      "eventGroupId":court.eventGroupId,
      "feedId":court.feedId,
      "presentation": checkFieldIsempty(presentations) ? null : {
        "id": court.eventGroupId,
        "eventId": court.eventGroupId,
        "client": "Sky Sports",
        "vision": "1",
        "description": presentations.description,
        "createdBy": "ems",
        "presentations": [
            {
                "transport": {
                    "type": presentations.type,
                    "source": presentations.source,
                    "params": {
                        "ipRed": presentations.ipRed,
                        "portRed": presentations.portRed
                    }
                }
            }
        ]
      }
    }
    list.push(objUpsertCourt)
   callPresentationAndFeedMutation(list, vcrLang.typeAction.editCourt, "Edited Court")
  }


  function handleUpsertPresentation(description, feedId, type, source, ipRed, portRed, court){
    const listCourt = []
    const objPresentation = {
      "id": court.eventGroupId,
      "eventId": court.eventGroupId,
      "client": "Sky Sports",
      "vision": "1",
      "description": description,
      "createdBy": "ems",
      "presentations": [
          {
              "transport": {
                  "type": type,
                  "source": source,
                  "params": {
                      "ipRed": ipRed,
                      "portRed": portRed
                  }
              }
          }
      ]
    }
    const objUpsertCourt = {
      "lucidEventId": checkFieldIsempty(element.lucidId) ? null : JSON.parse(element.lucidId).id,
      "country":court.country,
      "courtId":court.courtId,
      "courtName":court.courtName,
      "eventGroupId":court.eventGroupId,
      "feedId":feedId,
      "presentation": objPresentation,
    }    
    listCourt.push(objUpsertCourt)
   callPresentationAndFeedMutation(listCourt, vcrLang.typeAction.editCourt, "Edited Court")
  }


    function callPresentationAndFeedMutation(upsertCourt, action, message){

      upsertPresentationAndFeed({
       variables: {
         input: {
           "action": action,
           "input": JSON.stringify(upsertCourt)
         }
       },
     })
     .then((response) =>{
       console.log('response: ' , response);
       if(response.data) {
         var jsonResponse = JSON.parse(response.data.fillWorkorder.response)
         if(jsonResponse.statusCode != 200) {
          setRowSelected(rowSelected)
          enqueueSnackbar(JSON.stringify(jsonResponse.body), {autoHideDuration: 5000, variant: "error" });
         } else {
          setRowSelected(getActualCourtList(rowSelected, upsertCourt[0]))
          enqueueSnackbar(message, { autoHideDuration: 2500, variant: 'success' })  
         }
       } else {
         enqueueSnackbar(response.data, { autoHideDuration: 5000, variant: "error" });
       }
     })
     .catch((error) => {
       console.log("error: ", error)
       enqueueSnackbar(error, { autoHideDuration: 5000, variant: "error" });
     });
  
    }

  useEffect(() => {
    if(element) {
      getCourts(element.eventGroupId)
    }
  }, [element]);

  useEffect(() => {
  }, [rowSelected]);

  return (
    <Accordion expanded={visible} TransitionProps={{ unmountOnExit: true }} elevation={0} style={{ background: '#ffffff00', width: '100%' }}>
      <AccordionDetails style={{ padding: 0, margin: 0 }}>
          {element && 
          <>
         
            <VcrDataTable isOnlyRead={true} viewmenuselect={true} data={rowSelected} handleUpdateRows={handleUpdateRows} handleUpsertPresentation={handleUpsertPresentation} handleUpdatePresentations={handleUpdatePresentations}/>
          </>
          }
      </AccordionDetails>
    </Accordion>
  )
}


