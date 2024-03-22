import React, { useEffect, useState } from "react";
import { useMutation } from '@apollo/client';
import { FILL_WORKORDER } from "../../api/graphql/mutationWorkOrder";

export default function VcrCompetitionListByDateHook() {
  const [competitions, setCompetitions] = useState([])
  const [listCompetitions] = useMutation(FILL_WORKORDER)
  
  useEffect(() => {
    listCompetitions({
      variables: {
        input: {
          action:"GetAllCompetitionsByDate"
        },
      },
    })
    .then((response) =>{
      console.log('response GetAllCompetitionsByDate: ' , response);
      var jsonResponse = JSON.parse(response.data.fillWorkorder.response)
      if (jsonResponse.statusCode == "200"){
        setCompetitions(jsonResponse.body)
      }
      })
    .catch((error) => console.log(error));

}, [listCompetitions])

return [competitions]

}