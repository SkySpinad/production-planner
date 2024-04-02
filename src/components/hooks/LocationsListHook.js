import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { allLocations } from "../../store/slices/locationsSlice";
import { HANDLER_EVENTS } from "../../api/graphql/mutations";

export default function LocationsListHook(id, date) {
  const dispatch = useDispatch();
  const [locations] = useMutation(HANDLER_EVENTS)

  useEffect(() => {
    locations({
      variables: {
        input: {
            action: "GET_LOCATIONS_BY_EVENT_ID_AND_DATE", 
            "input":JSON.stringify({key: id, date: date}),
        }
      },
    })
    .then((response) =>{
      console.log("response getLocations: " , response);
      var jsonResponse = JSON.parse(response.data.apiHandler.response)
      if (jsonResponse.statusCode == "200"){
       dispatch(allLocations(jsonResponse.body))
      }
      })
    .catch((error) => console.log(error));

}, [locations])

  
  }