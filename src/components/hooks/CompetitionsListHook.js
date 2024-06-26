import React, { useEffect } from "react";
import { useMutation } from '@apollo/client';
import { GET_EVENTS } from "../../api/graphql/mutations";
import { useDispatch } from "react-redux";
import { allCompetitions, errorCompetition } from "../../store/slices/competitionSlice";

export default function CompetitionsListHook() {
  const dispatch = useDispatch();
  const [listEvents] = useMutation(GET_EVENTS)

  useEffect(() => {
    listEvents({
      variables: {
        input: {
            input:JSON.stringify({
                "arguments": {},
                "info": {
                    "fieldName": "getEvents",
                    "parentTypeName": "Mutation",
                    "variables": {}
                }
            }),
        }
      },
    })
    .then((response) =>{
      console.log("response listEvents: " , response);
      var jsonResponse = response.data.getEvents.eventList
       dispatch(allCompetitions(jsonResponse))
      })
    .catch((error) => {
      console.log(error)
      dispatch(errorCompetition(error))
    })

}, [listEvents])

}