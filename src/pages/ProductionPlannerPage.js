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
import store from "../store/store";
import { Provider } from 'react-redux';
import ProductionPlannerContainer from "../components/competition/ProductionPlannerContainer";

const apollo = MyApolloClient();

export default function ProductionPlannerPage({ user }) {
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
                <ProductionPlannerContainer />
              </SnackbarProvider>
            </ApolloProvider>
          </ThemeProvider>
        </Application>
        </Provider>
    </div>
  );
}