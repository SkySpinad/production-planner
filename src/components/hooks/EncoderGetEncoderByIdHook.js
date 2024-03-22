import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_ENCODER } from "../../api/graphql/mutationEncoders";



export default function EncoderGetEncoderByIdHook(id) {
    const [encoder, setInnerData] = useState([])
    var nextToken = ""
    const { loading, data, error, refetch } = useQuery(GET_ENCODER, {
        variables: {
            "key":id,
            nextToken
        },

    });
    useEffect(() => {

        if (data) {
            if (data.getEncoder.nextToken) {
                if (data.getEncoder.nextToken != nextToken) {
                    refetch({
                        "key":id,
                        "nextToken": data.getEncoder.nextToken
                    })
                }
            }
            var tmpList = [...data.getEncoder]
            setInnerData([...tmpList])
            /*setInnerData((old)=>{
                return [...old,...tmpList]
            })*/
        }
    }, [data, refetch])


    return [competitions]

}