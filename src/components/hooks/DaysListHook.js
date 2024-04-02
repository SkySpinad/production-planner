import React, { useEffect } from "react";
import { useMutation } from '@apollo/client';
import { HANDLER_EVENTS } from "../../api/graphql/mutations";
import { useDispatch } from "react-redux";
import { allDays } from "../../store/slices/daysSlice";

export default function DaysListHook(id) {
  const dispatch = useDispatch();
  const [days] = useMutation(HANDLER_EVENTS)

  useEffect(() => {
    days({
      variables: {
        input: {
            action: "GET_DAYS_BY_EVENT_ID", 
            "input":JSON.stringify({key: id}),
        }
      },
    })
    .then((response) =>{
      console.log("response getDays: " , response);
      var jsonResponse = JSON.parse(response.data.apiHandler.response)
      if (jsonResponse.statusCode == "200"){
       dispatch(allDays(jsonResponse.body))
      }
      })
    .catch((error) => console.log(error));

}, [days])

}