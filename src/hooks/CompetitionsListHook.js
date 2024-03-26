import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { LIST_COMPETITIONS } from "../api/queries";
import { useDispatch } from "react-redux";
import { allCompetitions } from "../store/slices/competitionSlice";

export default function CompetitionsListHook() {
    const dispatch = useDispatch();
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
            dispatch(allCompetitions([...tmpList]))
        }
    }, [data])

}