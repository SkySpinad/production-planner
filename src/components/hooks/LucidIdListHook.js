import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { FILL_WORKORDER } from "../api/graphql/mutationWorkOrder";

export default function LucidIdListHook(code) {

  const [lucidIds, setLucidIds] = useState([])
  const [listLucidId] = useMutation(FILL_WORKORDER)

  useEffect(() => {
    listLucidId({
      variables: {
        input: {
          "action": "GetListLucidId",
          //"input": JSON.stringify({})
          "input": JSON.stringify({"code" : code})
        }    
      },
    })
      .then((response) => {
        console.log("response List LucidId", response)
        var jsonResponse = JSON.parse(response.data.fillWorkorder.response)
        setLucidIds(jsonResponse.body)
      })
      .catch((error) => console.log(error));
}, [listLucidId])

return [lucidIds]

}
