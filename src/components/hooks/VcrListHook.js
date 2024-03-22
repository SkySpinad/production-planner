import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LIST_COMPETITIONS, LIST_WORKORDERS } from "../../api/graphql/queryWorkOrder";

export default function VcrListHook() {

  const [vcr, setInnerData] = useState([])
  var nextToken = ""
  const { loading, data, error, refetch } = useQuery(LIST_COMPETITIONS,{fetchPolicy: 'network-only',variables:{nextToken}});


  useEffect(() => {
    if (data) {
      if (data.listCompetitions.nextToken) {
        if (data.listCompetitions.nextToken != nextToken){
          nextToken = data.listCompetitions.nextToken
          refetch({
            "nextToken": nextToken
          })}
      }
      var tmpList = [...data.listCompetitions.items]
      setInnerData([...tmpList])
    }
  }, [data])

  return [vcr, refetch]

}
