import React, { useEffect } from "react";
import { useMutation } from '@apollo/client';
import { useDispatch } from "react-redux";
import { allDays } from "../../store/slices/daysSlice";
import { GET_DAYS } from "../../api/graphql/mutations";

export default function DaysListHook(id) {
  const dispatch = useDispatch();
  const [days] = useMutation(GET_DAYS)

  useEffect(() => {
    days({
      variables: {
        input: {
            input:JSON.stringify({
                "arguments": {
                    "input": {
                        "eventId": id
                    }
                },
                "info": {
                    "fieldName": "getDays",
                    "parentTypeName": "Mutation",
                    "variables": {}
                },
            }),
        }
      },
    })
    .then((response) =>{
      console.log("response getDays: " , response);
      var jsonResponse = response.data.getDays.dayList
      //if (jsonResponse.statusCode == "200"){
       dispatch(allDays(jsonResponse))
      //}
      })
    .catch((error) => console.log(error));

}, [days])

}