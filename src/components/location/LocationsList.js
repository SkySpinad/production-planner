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
  const error = useSelector((state) => state.locations.error);
  const [upsertPresentationAndFeed] = useMutation(FILL_WORKORDER)
  const dispatch = useDispatch();
  LocationsListHook(element.eventGroupId , element.eventParentGroupId)

  useEffect(()=>{
  },[visible])


  function handleUpdatePresentations(presentations, court){
    console.log('upsert Presentations');
  }

  function handleUpsertPresentation(description, feedId, type, source, ipRed, portRed, court){
    console.log('upsert Presentation');
    console.log('description: ' , description);
    console.log('feedId: ' , feedId);
    console.log('type: ' , type);
    console.log('ipRed: ' , ipRed);
    console.log('portRed: ' , portRed);
    console.log('court: ' , court);
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
    { error && enqueueSnackbar(JSON.stringify(error), {autoHideDuration: 5000, variant: "error" })}
    { locationList &&
    <Accordion expanded={visible} TransitionProps={{ unmountOnExit: true }}  >
      <AccordionDetails style={{paddingBottom:'10px', margin:0}}>
        <Typography textAlign="center" fontSize={12} fontWeight={700} my={2}>
            Locations
        </Typography>
        <LocationsTable isOnlyRead={true} viewmenuselect={true} data={locationList} handleUpsertPresentation={handleUpsertPresentation} handleUpdatePresentations={handleUpdatePresentations}/>
      </AccordionDetails>
    </Accordion>
  }
  </>
}
