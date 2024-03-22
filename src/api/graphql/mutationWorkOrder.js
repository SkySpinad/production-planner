import { gql } from "@apollo/client";


export const LIST_COURTS_BY_COMPETITIONS = gql`
mutation GetCourtsByCompetitionId($eventGroupId: String!) {
  getCourtsByCompetitionId(eventGroupId: $eventGroupId) {
    items {
      key
      country
      courtId
      courtName
      eventGroupId
      feedId
      presentation
    }
  }
}
`;

export const FILL_WORKORDER = gql`
mutation FillWorkorder($input: FillWorkorderInput!) {
  fillWorkorder(input: $input) {
    response
  }
}`;
