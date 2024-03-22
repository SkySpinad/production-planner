import { useQuery, useSubscription } from "@apollo/client";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import {  SUBSCRIBE_UPDATE_EVENT } from "../../api/graphql/mutation";



export default function EventUpdateSubscriptionHook(dataTmp){
  const [innerData,setInnerData] = useState(dataTmp) 
  const {loading, data, error} =   useSubscription(SUBSCRIBE_UPDATE_EVENT);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(()=>{
    if(data){
      setInnerData(data.onUpdateEvents)
      enqueueSnackbar("Event update with ID "+data.onUpdateEvents.key, { autoHideDuration: 2000,variant:'info' })
    }
  },[data])
  return [innerData]
  
}