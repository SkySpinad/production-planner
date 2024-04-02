import React, { useEffect } from "react";
import { Accordion, AccordionDetails, Typography } from "@mui/material";
import LocationsListHook from "../hooks/LocationsListHook";
import { useSelector } from 'react-redux';
import LocationsTable from "../table/LocationsTable";
import { vcrLang } from "../../common/lang";
import { useMutation } from '@apollo/client';
import { FILL_WORKORDER } from "../../api/graphql/mutations";
import { useSnackbar } from "notistack";
import { useDispatch } from "react-redux";
import { allLocations, updateLocations } from "../../store/slices/locationsSlice";
import { createLocationObject, updateLocationObject } from "../../services/serviceDB";

export default function LocationsList({ visible, element }){

  const { enqueueSnackbar } = useSnackbar();
  const locationList = useSelector((state) => state.locations.data);
  const [upsertPresentationAndFeed] = useMutation(FILL_WORKORDER)
  const dispatch = useDispatch();
  LocationsListHook(element.id, element.startDateTime)

  useEffect(()=>{
  },[visible])


  function handleUpdatePresentations(presentations, court){
    callPresentationAndFeedMutation(updateLocationObject(presentations, court), vcrLang.typeAction.editLocation, "Edited Court")
  }

  function handleUpsertPresentation(description, feedId, type, source, ipRed, portRed, court){
    callPresentationAndFeedMutation(createLocationObject(description, feedId, type, source, ipRed, portRed, court, element), vcrLang.typeAction.editLocation, "Edited Location")
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
        dispatch(allLocations(locationList))
        enqueueSnackbar(JSON.stringify(jsonResponse.body), {autoHideDuration: 5000, variant: "error" });
        } else {
        dispatch(updateLocations(upsertCourt[0]))
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

  return <> 
    { locationList && locationList.data &&
    <Accordion expanded={visible} TransitionProps={{ unmountOnExit: true }}  >
      <AccordionDetails style={{paddingBottom:'10px', margin:0}}>
        <Typography textAlign="center" fontSize={12} fontWeight={700} my={2}>
            Locations
        </Typography>
        <LocationsTable isOnlyRead={true} viewmenuselect={true} data={locationList.data} handleUpsertPresentation={handleUpsertPresentation} handleUpdatePresentations={handleUpdatePresentations}/>
      </AccordionDetails>
    </Accordion>
  }
  </>
}
