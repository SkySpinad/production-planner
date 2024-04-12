import React, { useEffect } from "react";
import { useMutation } from '@apollo/client';
import { useDispatch } from "react-redux";
import { allDays, errorDay } from "../../store/slices/daysSlice";
import { GET_DAYS } from "../../api/graphql/mutations";

export default function DaysListHook(id) {
  const dispatch = useDispatch();
  const [days] = useMutation(GET_DAYS)

  useEffect(() => {
    days({
      variables: {
        input: {
          eventId: id
        }
      },
    })
    .then((response) =>{
      console.log("response getDays: " , response);
      var jsonResponse = response.data.getDays.dayList
       dispatch(allDays(jsonResponse))
      })
      .catch((error) => {
        console.log(error)
        dispatch(errorDay(error))
      })

}, [days])

}