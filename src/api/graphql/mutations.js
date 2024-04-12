import { gql } from "@apollo/client";


export const FILL_WORKORDER = gql`
mutation FillWorkorder($input: FillWorkorderInput!) {
  fillWorkorder(input: $input) {
    response
  }
}`;

export const GET_EVENTS = gql`
mutation GetEvents($input: EventInput!) {
  getEvents(input: $input) {
    eventList {
      eventGroupEndDate
      eventGroupId
      eventGroupName
      eventGroupStartDate
      eventParentGroupId
      eventParentGroupName
      eventSubType
      eventType
      lucidId
      lucidStatus
    }
  }
}`;


export const GET_DAYS = gql`
mutation GetDays($input: DayInput!) {
  getDays(input: $input) {
    dayList {
      endDateTime
      lucidStatus
      id
      name
      otherStatus
      startDateTime
      vcrStatus
    }
  }
}`;

export const GET_LOCATIONS_BY_EVENT_ID = gql`
mutation GetDays($input: LocationInput!) {
  getLocations(input: $input) {
    locationList {
      eventId
      label
      locationId
      lucidId
      lucidStatus
    }
  }
}`;