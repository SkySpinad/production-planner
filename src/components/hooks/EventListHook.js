import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LIST_EVENT } from "../../api/graphql/mutation";



export default function EventListHook() {
  const [events, setInnerData] = useState([])
  var nextToken = ""
  const { loading, data, error, refetch } = useQuery(LIST_EVENT,{fetchPolicy: 'network-only',variables:{nextToken}});

  useEffect(() => {
    if (data) {
      if (data.listEvents.nextToken) {
        
        if (data.listEvents.nextToken != nextToken){
          nextToken = data.listEvents.nextToken
        
          refetch({
            "nextToken": nextToken
          })}
   
      }
      var tmpList = [...data.listEvents.items]
     
      setInnerData([...tmpList])
      /*setInnerData((old) => {
        return [...old, ...tmpList]
      })*/
    }
  }, [data])

  return [events, refetch]

}
