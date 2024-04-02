import { gql } from "@apollo/client";


export const FILL_WORKORDER = gql`
mutation FillWorkorder($input: FillWorkorderInput!) {
  fillWorkorder(input: $input) {
    response
  }
}`;

export const HANDLER_EVENTS = gql`
mutation MyMutation($input: ApiHandlerInput!) {
  apiHandler(input: $input) {
    response
  }
}`;

