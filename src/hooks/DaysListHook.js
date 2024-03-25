import { useMutation } from "@apollo/client";
import { useEffect, useState } from "react";
import { initializeDays } from "../store/slices/daysSlice";
import { useDispatch } from "react-redux";
import { GET_COURTS_BY_COMPETITION_ID } from "../api/queries";

export default function DaysListHook(id) {

    const [courts, setCourts] = useState([])
    const [listCourts] = useMutation(GET_COURTS_BY_COMPETITION_ID)
    const dispatch = useDispatch();

    useEffect(() => {
        listCourts({
        variables: {
            "input":{
                "action": "GET_COURTS_LIST_FROM_COMPETITION",
                "input":JSON.stringify({"id":id })
            }
        },
      })
      .then((response) =>{
        var jsonResponse = JSON.parse(response.data.api.response)
        console.log('jsonResponse: ' , jsonResponse);
        if (jsonResponse.statusCode == "200"){
            setCourts(jsonResponse.body)
            dispatch(initializeDays(jsonResponse.body));
        }
        })
      .catch((error) => console.log(error));
  
  }, [listCourts])
  
  return [courts]

}