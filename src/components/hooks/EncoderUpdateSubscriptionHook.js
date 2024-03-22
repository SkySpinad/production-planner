import { useQuery, useSubscription } from "@apollo/client";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { SUBSCRIBE_UPDATE_ENCODER } from "../../api/graphql/mutationEncoders";



export default function EncoderUpdateSubscriptionHook(eventID){
  const [encoderUpdated,setEncoderUpdated] = useState() 
  const { enqueueSnackbar } = useSnackbar();
  const {loading, data, error} =   useSubscription(SUBSCRIBE_UPDATE_ENCODER,{
    variables:{
      "eventID":eventID
    }
  });

  useEffect(()=>{
    if(data){
      setEncoderUpdated(data.onUpdateEncoder)
      //enqueueSnackbar("Update Encoder received "+data.onUpdateEncoder.key, { autoHideDuration: 1000,variant:'info' })
    }
  },[data])
  return [encoderUpdated]
  
}