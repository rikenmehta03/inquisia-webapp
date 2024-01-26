import React from "react";
import ReactDOM from "react-dom/client";
import { StyledEngineProvider, CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";

import App from "./App.tsx";
import { AuthSessionProvider } from "./context/AuthSessionProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline />
        <AuthSessionProvider>
          <App />
        </AuthSessionProvider>
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
