import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import './index.css'

import {persistor,store} from "./Redux/Store";
import App from "./App";

const AUTH0_DOMAIN = "dev-zq1m3o1i.us.auth0.com";
const AUTH0_CLIENT_ID = "t8JiYlzhXaqZpYNWCKamK6VHkk5VPV2H";
axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";

const root = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Auth0Provider>
  </BrowserRouter>,
  root
);
