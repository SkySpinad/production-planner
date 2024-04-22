import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMutation } from "@apollo/client";
import { errorPresentation, getPresentationsByFeedId } from "../../store/slices/presentationsSlice";
import presentation_by_feed_id from "../../mock/presentations/presentation_by_feed_id.json";
import { GET_PRESENTATIONS_BY_FEED_ID } from "../../api/graphql/mutations";

export default function PresentationsListHook(feedId) {

  const dispatch = useDispatch();
  const [presentations] = useMutation(GET_PRESENTATIONS_BY_FEED_ID)

  useEffect(() => {
    presentations({
      variables: {
        input: {
          eventId: feedId
        }
      },
    })
    .then((response) =>{
      console.log("response getPresentations: " , response);
      //var jsonResponse = response.data.getLocations.locationList
       dispatch(getPresentationsByFeedId(presentation_by_feed_id))
      })
      .catch((error) => {
        console.log(error)
        dispatch(errorPresentation(error))
      })

}, [presentations])

  
  }