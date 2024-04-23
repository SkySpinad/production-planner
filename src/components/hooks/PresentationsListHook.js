import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { errorPresentation, getPresentationsByFeedId } from "../../store/slices/presentationsSlice";
import { GET_PRESENTATIONS_BY_FEED_ID } from "../../api/graphql/mutations";

export default function PresentationsListHook(feedId) {

  const dispatch = useDispatch();
  const [presentations] = useMutation(GET_PRESENTATIONS_BY_FEED_ID)

  useEffect(() => {
    presentations({
      variables: {
        input: {
          feedId: feedId
        }
      },
    })
    .then((response) =>{
      console.log("response getPresentations: " , response);
      var jsonResponse = response.data.getPresentations.presentationList
       dispatch(getPresentationsByFeedId(jsonResponse))
      })
      .catch((error) => {
        console.log(error)
        dispatch(errorPresentation(error))
      })

}, [presentations])

  
  }