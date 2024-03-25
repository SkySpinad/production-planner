import { gql } from "@apollo/client";
export const GET_ALLOWED_CONTENT = gql`
    query MyQuery($id: String) {
        getAllowedContent(id: $id) {
        feedTypeGroup
        id
        name
        }
    }
`;
export const LIST_ALLOWED_CONTENT = gql`
    query MyQuery($nextToken: String) {
        listAllowedContent(nextToken: $nextToken) {
        items {
            feedTypeGroup
            id
            name
        }
        nextToken
        }
    }
`;
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
            name
            lastUpdated
            id
            
            areaId
            areaName
            follow
            startDate 
            endDate
            year
        }
        nextToken
        }
    }
`;

export const GET_COMPETITIONS_BY_SPORT = gql`
    query MyQuery($sport: String!) {
        getCompetitionsBySport(sport: $sport) {
        items {
            areaId
            areaName
            startDate 
            endDate
            follow
            id
            lastUpdated
            name
            year
        }
        }
    }
    `;


export const GET_COMPETITIONS_BY_TOURCALENDAR_ID = gql`
    query MyQuery($tourCalendarId: String!) {
        getCompetitionsByTourCalendarId(tourCalendarId: $tourCalendarId) {
        items {
            name
            lastUpdated
            id
            court
            areaId
            areaName
        }
        nextToken
        }
    }
`;
export const GET_MATCH_DETAILS = gql`
    query MyQuery($id: String) {
        getMatchDetails(id: $id) {
        id
        lastUpdated
        matchInfo
        officialStartDate
        score
        title
        }
    }
  
 
`;
export const LIST_MATCH_DETAILS = gql`
query MyQuery($nextToken: String) {
    listMatchDetails(nextToken: $nextToken) {
      items {
        id
        lastUpdated
        matchInfo
        score
        officialStartDate
        title
      }
      nextToken
    }
  }
  
 
`;
export const GET_MATCHES = gql`
    query MyQuery($id: String) {
        getMatches(id: $id) {
        courtId
        courtName
        coverageLevel
        date
        drawPosition
        id
        lastUpdated
        orderOfPlay
        tournamentId
        }
    }
 
`;



export const LIST_MATCHES = gql`
    query MyQuery($nextToken: String){
        listMatches(nextToken: $nextToken) {
        items {
            courtId
            courtName
            coverageLevel
            date
            drawPosition
            id
            lastUpdated
            orderOfPlay
            tournamentId
        }
        nextToken
        }
    }
`;

export const GET_MATCHES_BY_TOURNAMENT_ID = gql`
    query MyQuery($tournamentId: String!) {
        getMatchesByTournamentId(tournamentId: $tournamentId) {
        items {
            courtId
            courtName
            coverageLevel
            date
            drawPosition
            id
            lastUpdated
            orderOfPlay
            tournamentId
        }
        nextToken
        }
    }
`;
export const GET_TOUR_CALENDAR = gql`
    query MyQuery($id: String) {
        getTourCalendar(id: $id) {
        active
        endDate
        id
        startDate
        tour
        tourYear
        }
    }
`;
export const LIST_TOUR_CALENDAR = gql`
    query MyQuery($nextToken: String, $filter: TableTourCalendarFilterInput) {
        listTourCalendar(filter: $filter, limit: 50, nextToken: $nextToken) {
        items {
            tourYear
            tour
            startDate
            endDate
            active
            id
        }
        nextToken
        }
    }
`;
export const GET_TOURNAMENTS = gql`
    query MyQuery($id: String) {
        getTournaments(id: $id) {
        competitionId
        drawSize
        endDate
        gender
        lastUpdated
        id
        matchType
        name
        startDate
        type
        }
    }
`;
export const LIST_TOURNAMENTS = gql`
query MyQuery($filterTournament:TableTournamentsFilterInput, $nextToken: String) {
    listTournaments(filter: $filterTournament, nextToken: $nextToken) {
    nextToken
    items {
        competitionId
        drawSize
        endDate
        id
        gender
        lastUpdated
        matchType
        name
        startDate
        type
        rounds {
            endDate
            formatId
            group
            id
            numberOfGames
            orderMethod
            prizeCurrency
            type
            title
            ties
            startDate
            scoringSystem
            roundNumberFromEnd
            roundNumber
            roundName
          }
    }
    }
}
    
`;
export const TOURNAMENT_BY_COMPETITION_ID = gql`
    query MyQuery($competitionId: String!) {
        getTournamentsByCompetitionsId(competitionId: $competitionId) {
        items {
            drawSize
            competitionId
            endDate
            gender
            id
            matchType
            lastUpdated
            name
            startDate
            type
        }
        nextToken
        }
    }
  `;

  export const LIST_FAVOURITES = gql`
    query MyQuery($nextToken: String) {
        listFavourites(nextToken: $nextToken) {
        nextToken
        items {
            id
            details
        }
        }
    }
    
`;
 

export const DATATABLE_BY_COMP_ID =  gql`
    mutation MatchesByCompId($input: Api!) {
        api(input: $input) {
            response
        }
    }
`;

export const GET_SPORT_LIST =  gql`
    mutation GetSportList($input: Api!) {
        api(input: $input) {
            response
        }
    }
`;

export const KAFKA_MESSAGE =  gql`
    mutation KafkaMessage($input: Api!) {
        api(input: $input) {
            response
        }
    }
`;



