import React from "react";
import { useQuery } from "@apollo/client";
import { LIST_COMPETITIONS } from "../api/queries";
import competitions_mock from './../mock/productionPlanner/competitions.json';
import { MyApolloClient } from "../services/apollo";


export default function GetComp() {

var competitions = []

const apollo = MyApolloClient()
    console.log('prima di useQuery');
    var nextToken = ""
    const data = apollo.query({query:LIST_COMPETITIONS, variables: { nextToken }, fetchPolicy: "no-cache" }).then((data)=> {
        competitions =  data.data.listCompetitions.items
      })
    console.log('dopo useQuery');
    console.log('data GetComp: ' , competitions);
    return competitions
}