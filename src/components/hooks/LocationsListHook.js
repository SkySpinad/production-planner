import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LIST_COURTS_BY_COMPETITIONS } from "../../api/graphql/mutations";
import { useMutation } from "@apollo/client";
import { allLocations } from "../../store/slices/locationsSlice";

export default function LocationsListHook(eventGroupId) {
    const dispatch = useDispatch();
    const[getCourtsByEventGroupId] = useMutation(LIST_COURTS_BY_COMPETITIONS)

    useEffect(() => {
        getCourtsByEventGroupId({
            variables: {
                "eventGroupId": eventGroupId
            },
            fetchPolicy: 'no-cache',
          }).then((response) => {
            console.log('response locations: ' , response.data.getCourtsByCompetitionId.items);
            dispatch(allLocations(response.data.getCourtsByCompetitionId.items))
          })
    /*
      listEvents({
        variables: {
          "input": {
            "action": "GetEventsUnconfirmed"
          }    
        },
      })
        .then((response) => {
          console.log("response", response)
          var jsonResponse = JSON.parse(response.data.listUnconfirmedEventsOverlap.response)
          setEvents(jsonResponse.body.data.listUnconfirmedEvents.items)
        })
        .catch((error) => console.log(error));
        */
  }, [getCourtsByEventGroupId])
  
  }