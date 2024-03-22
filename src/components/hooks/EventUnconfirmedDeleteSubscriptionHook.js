import { useQuery, useSubscription } from "@apollo/client";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { SUBSCRIBE_DELETE_EVENT_UNCONFIRMED } from "../../api/graphql/mutation";

export default function EventUnconfirmedDeleteSubscriptionHook(dataTmp){
  const [innerData,setInnerData] = useState(dataTmp) 
  const {loading, data, error} =   useSubscription(SUBSCRIBE_DELETE_EVENT_UNCONFIRMED);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(()=>{
    if(data){
      setInnerData(data.OnDeleteEventUnconfirmed.key)
      enqueueSnackbar("Event update with ID "+data.OnDeleteEventUnconfirmed.key, { autoHideDuration: 2000,variant:'info' })
    }
  },[data])
  return [innerData]
  
}