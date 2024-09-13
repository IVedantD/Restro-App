import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from '@auth0/auth0-react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="vedantd.us.auth0.com"
    clientId="epesbjNXyxgQua97QONpiH3JnxRGMMZv"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    {/* <AppProvider> */}
      <App />
    {/* </AppProvider> */}
  </Auth0Provider>
);
