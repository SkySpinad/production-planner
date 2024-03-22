import React, { useEffect, useState } from "react";
import { MANAGE_CONFIG_LIST } from "../../api/graphql/mutationConfig";
import { useMutation } from "@apollo/client";

export default function ConfigListHook() {
 
  const [genericConfigList, seConfigs] = useState([])
  const [listConfig] = useMutation(MANAGE_CONFIG_LIST)
  
  useEffect(() => {
    listConfig({
      variables: {
        input: {
          action: "GetServiceKeyList"
        }
      },
    })
    .then((response) =>{
      var jsonResponse = JSON.parse(response.data.manageServiceKeyList.response)
      if (jsonResponse.statusCode == "200"){
        seConfigs(jsonResponse.body)
      }
      })
    .catch((error) => console.log(error));

}, [listConfig])

return [genericConfigList]

}
