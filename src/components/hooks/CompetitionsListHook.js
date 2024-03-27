import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { LIST_COMPETITIONS } from "../../api/graphql/queries";
import { useDispatch } from "react-redux";
import { allCompetitions } from "../../store/slices/competitionSlice";

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
            // add mocked status
            var newList = []
            tmpList.map(el=> {
                el['lucidStatus'] = 'Waiting'
                el['vcrStatus'] = 'Started'
                el['otherStatus'] = 'Undefined'
                newList.push(el)
            })
            dispatch(allCompetitions([...tmpList]))
        }
    }, [data])

}