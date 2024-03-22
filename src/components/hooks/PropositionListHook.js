import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LIST_PROPOSITIONS } from "../../api/graphql/mutationPropositions";


export default function PropositionListHook() {
  const [propositionsList, setInnerData] = useState([])
  var nextToken = ""
  const { loading, data, error, refetch } = useQuery(LIST_PROPOSITIONS,{fetchPolicy: 'network-only',variables:{nextToken}});
  
  useEffect(() => {
    if (data) {
      if (data.listPropositions.nextToken) {
        if (data.listPropositions.nextToken != nextToken){
          nextToken = data.listPropositions.nextToken
          refetch({
            "nextToken": nextToken
          })}
      }
      var tmpList = [...data.listPropositions.items]
      setInnerData([...tmpList])
    }
  }, [data])

  return [propositionsList, refetch]

}
