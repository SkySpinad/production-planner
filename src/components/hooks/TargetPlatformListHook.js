import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LIST_TARGET_PLATFORM } from "../../api/graphql/mutationPropositions";


export default function TargetPlatformListHook() {

  const [targetPlatform, setInnerData] = useState([])
  const { loading , error, data } = useQuery(LIST_TARGET_PLATFORM);

  useEffect(() => {
      if (data) {   
          if(data.getConfig.target_platforms.length>0) {
            var tmpList = [...data.getConfig.target_platforms]
            setInnerData([...tmpList])
          }
      }
  }, [data])

  return [targetPlatform]

}
