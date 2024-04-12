import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { allLocations, errorLocation } from "../../store/slices/locationsSlice";
import { GET_LOCATIONS_BY_EVENT_ID } from "../../api/graphql/mutations";

export default function LocationsListHook(eventGroupId, eventParentGroupId) {
  const dispatch = useDispatch();
  const [locations] = useMutation(GET_LOCATIONS_BY_EVENT_ID)

  useEffect(() => {
    locations({
      variables: {
        input: {
          eventGroupId: eventGroupId,
          eventParentGroupId: eventParentGroupId
        }
      },
    })
    .then((response) =>{
      console.log("response getLocations: " , response);
      var jsonResponse = response.data.getLocations.locationList
       dispatch(allLocations(jsonResponse))
      })
      .catch((error) => {
        console.log(error)
        dispatch(errorLocation(error))
      })

}, [locations])

  
  }