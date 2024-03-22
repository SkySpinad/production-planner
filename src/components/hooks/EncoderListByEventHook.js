import React, { useEffect, useState } from "react";
import { useMutation } from '@apollo/client';
import { GET_ENCODER_BY_EVENTID } from "../../api/graphql/mutationEncoders";

export default function EncoderListByEventHook(id) {
  const [encoders, setEncoders] = useState([])
  const [listEncoders] = useMutation(GET_ENCODER_BY_EVENTID)
  
  useEffect(() => {
    listEncoders({
      variables: {
        input: {
          action:"GetEncodersByEvent",
          event: {
            key: id
          }
        },
      },
    })
    .then((response) =>{
      var jsonResponse = JSON.parse(response.data.getEncodersByEvent.response)
      if (jsonResponse.statusCode == "200"){
        setEncoders(jsonResponse.body)
      }
      })
    .catch((error) => console.log(error));

}, [listEncoders])

return [encoders]

}