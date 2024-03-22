import { uri, key, type, apiKey, regionAWS } from "../api/graphql/config";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client";

export function MyApolloClient() {
  const auth = {
    type: type,
    apiKey: apiKey,
  };


  const link = ApolloLink.from([
    createAuthLink({ url:uri, regionAWS, auth }),
    createSubscriptionHandshakeLink({ url:uri, regionAWS, auth }, new HttpLink({ uri: uri })),
  ]);

  const MyApolloClient = new ApolloClient({
    uri: uri,
    link:link,
    cache: new InMemoryCache(),
    headers: {
      "x-api-key": key,
    },
  });
  return MyApolloClient
}
