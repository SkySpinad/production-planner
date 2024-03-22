import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LIST_WORKORDERS } from "../../api/graphql/queryWorkOrder";

export default function WorkOrderListHook() {

  const [workOrder, setInnerData] = useState([])
  var nextToken = ""
  const { loading, data, error, refetch } = useQuery(LIST_WORKORDERS,{fetchPolicy: 'network-only',variables:{nextToken}});

  useEffect(() => {
    if (data) {
      if (data.listWorkorders.nextToken) {
        if (data.listWorkorders.nextToken != nextToken){
          nextToken = data.listWorkorders.nextToken
          refetch({
            "nextToken": nextToken
          })}
      }
      var tmpList = [...data.listWorkorders.items]
      setInnerData([...tmpList])
    }
  }, [data])

  return [workOrder, refetch]

}
