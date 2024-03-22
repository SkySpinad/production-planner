import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { LIST_ENCODER } from "../../api/graphql/mutationEncoders";



export default function EncoderListHook(id) {
    const [encoders, setInnerData] = useState([])
    var nextToken = ""
    const { loading, data, error, refetch } = useQuery(LIST_ENCODER, {
        variables: {
            "filterEncoder": {
                "eventId": { "eq": id }
            },
            nextToken
        },

    });
    useEffect(() => {

        if (data) {
            if (data.listEncoders.nextToken) {
                if (data.listEncoders.nextToken != nextToken) {
                    refetch({
                        "filterEncoder": {
                            "eventId": { "eq": id }
                        },
                        "nextToken": data.listEncoders.nextToken
                    })
                }
            }
            var tmpList = [...data.listEncoders.items]
            setInnerData([...tmpList])
            /*setInnerData((old)=>{
                return [...old,...tmpList]
            })*/
        }
    }, [data])


    return [encoders]

}