import React, { useState } from "react";
import { ApolloProvider } from "@apollo/client";
import { MyApolloClient } from "../services/apollo";
import { SnackbarProvider } from "notistack";
import { Application } from "react-rainbow-components";
import { rainbowTheme } from "../common/layout";
import { setUser } from "../common/user";
import { ThemeProvider } from "@mui/material";
import { theme } from "../theme";
import { mocked_user } from "../mock/mocked_data";
import VcrContainer_v2 from "../components/vcr/v2/VcrContainer_v2";
import store from "../store/store";
import { Provider } from 'react-redux';

const apollo = MyApolloClient();

export default function VcrPage_v2({ user }) {
  if (user) {
    setUser(user);
  }
  if (!user && process.env.NODE_ENV=="development"){
    user = mocked_user
    setUser(user)
  }
  return (
    <div>
      <Provider store={store}>
        <Application theme={rainbowTheme}>
          <ThemeProvider theme={theme}>
            <ApolloProvider client={apollo}>
              <SnackbarProvider
                maxSnack={3}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <VcrContainer_v2 />
              </SnackbarProvider>
            </ApolloProvider>
          </ThemeProvider>
        </Application>
        </Provider>
    </div>
  );
}
