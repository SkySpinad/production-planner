import { useQuery, useSubscription } from "@apollo/client";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { LIST_EVENT_FILTERED_BY_ID } from "../../api/graphql/mutation";



export default function EventListHookFiltered( id ) {
  const [event, setInnerData] = useState()
  var nextToken = ""
  const { loading, data, error,refetch } = useQuery(LIST_EVENT_FILTERED_BY_ID, {
    fetchPolicy: 'network-only',
    nextToken,
    variables: {
      "eventFilter": { "key": { "eq": id } }
    }
  });
  useEffect(() => {
    if (data) {
        if (data.listEvents.nextToken) {
          if (data.listEvents.nextToken != nextToken){
            nextToken = data.listEvents.nextToken
            refetch({
              "nextToken": nextToken
            })}
          }
      setInnerData(data.listEvents)
    }
  }, [data])
  return [event,loading]

}