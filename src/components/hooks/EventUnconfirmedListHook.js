import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { LIST_UNCONFIRMED_EVENT_OVERLAP } from "../../api/graphql/mutation";

export default function EventUnconfirmedListHook() {
  const [events, setEvents] = useState([])
  const [listEvents] = useMutation(LIST_UNCONFIRMED_EVENT_OVERLAP)
  
  useEffect(() => {
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
}, [listEvents])

return [events]

}
