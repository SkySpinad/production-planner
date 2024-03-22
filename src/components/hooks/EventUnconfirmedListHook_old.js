import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LIST_UNCONFIRMED_EVENT } from "../../api/graphql/mutation";

export default function EventUnconfirmedListHook_old() {
  const [events, setInnerData] = useState([])
  var nextToken = ""
  const { loading, data, error, refetch } = useQuery(LIST_UNCONFIRMED_EVENT,{fetchPolicy: 'network-only',variables:{nextToken}});

  useEffect(() => {
    if (data) {
      if (data.listUnconfirmedEvents.nextToken) {
        if (data.listUnconfirmedEvents.nextToken != nextToken){
          nextToken = data.listUnconfirmedEvents.nextToken
          refetch({
            "nextToken": nextToken
          })}
      }
      var tmpList = [...data.listUnconfirmedEvents.items]
     
      setInnerData([...tmpList])
    }
  }, [data])

  return [events, refetch]

}
