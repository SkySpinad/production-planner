import React, { useEffect } from "react";
import { useMutation } from '@apollo/client';
import { HANDLER_EVENTS } from "../../api/graphql/mutations";
import { useDispatch } from "react-redux";
import { allCompetitions } from "../../store/slices/competitionSlice";

export default function CompetitionsListHook() {
  const dispatch = useDispatch();
  const [listEvents] = useMutation(HANDLER_EVENTS)

  useEffect(() => {
    listEvents({
      variables: {
        input: {
            action: "GET_EVENTS", 
            "input":JSON.stringify(""),
        }
      },
    })
    .then((response) =>{
      console.log("response listEvents: " , response);
      var jsonResponse = JSON.parse(response.data.apiHandler.response)
      if (jsonResponse.statusCode == "200"){
       dispatch(allCompetitions(jsonResponse.body))
      }
      })
    .catch((error) => console.log(error));

}, [listEvents])

}