import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { LIST_COMPETITIONS } from "../api/queries";

export default function CompetitionsListHook() {
    const [competitions, setInnerData] = useState([])
    var nextToken = ""
    const { loading, data, error, refetch } = useQuery(LIST_COMPETITIONS,{ variables: { nextToken }, fetchPolicy: "no-cache" });

    useEffect(() => {
        if (data) {
            if (data.listCompetitions.nextToken) {
                if (data.listCompetitions.nextToken != nextToken) {
                    refetch({
                        "nextToken": data.listCompetitions.nextToken
                    })
                }
            }
            var tmpList = [...data.listCompetitions.items]
            setInnerData([...tmpList])
        }
    }, [data])


    return [competitions]

}