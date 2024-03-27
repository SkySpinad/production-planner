import { gql } from "@apollo/client";


export const GET_COMPETITIONS = gql`
    query MyQuery($id: String) {
        getCompetitions(id: $id) {
        areaId
        areaName
        court
        id
        lastUpdated
        name
        }
    }
`;

export const LIST_COMPETITIONS = gql`
    query MyQuery($nextToken: String) {
        listCompetitions(nextToken: $nextToken, limit:50) {
        items {
            competitionName
            endDateTime
            eventGroupId
            eventGroupName
            eventRegion
            extBookingId
            gender
            matchType
            startDateTime
            type
            lucidId
        }
        nextToken
        }
    }
`;


export const GET_COURTS_BY_COMPETITION_ID =  gql`
    mutation GetCourtsByCompetitionId($input: Api!) {
        api(input: $input) {
            response
        }
    }
`;



