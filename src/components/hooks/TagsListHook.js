import React, { useEffect, useState } from "react";
import { useMutation } from "@apollo/client";
import { LIST_TAGS } from "../../api/graphql/mutation";

export default function TagsListHook() {
  const [tags, setTags] = useState([])
  const [listTags] = useMutation(LIST_TAGS)
  
  useEffect(() => {
    listTags({
      variables: {
        "input": {
          "action": "GetTags"
        }    
      },
    })
      .then((response) => {
        console.log("response Tags", response)
        var jsonResponse = JSON.parse(response.data.listTags.response)
        setTags(jsonResponse.body)
      })
      .catch((error) => console.log(error));
}, [listTags])

return [tags]

}
