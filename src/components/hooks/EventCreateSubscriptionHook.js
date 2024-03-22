import { useQuery, useSubscription } from "@apollo/client";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import {  SUBSCRIBE_CREATE_EVENT } from "../../api/graphql/mutation";



export default function EventCreateSubscriptionHook(dataTmp){
  const [innerData,setInnerData] = useState(dataTmp) 
  const {loading, data, error} =   useSubscription(SUBSCRIBE_CREATE_EVENT);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(()=>{
    if(data){
      setInnerData(data.onCreateEvents)
      enqueueSnackbar("New event with ID "+data.onCreateEvents.key, { autoHideDuration: 2000,variant:'info' })
    }
  },[data])
  return [innerData]
  
}