import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import {DesktopContextProvider} from "./context/DesktopContext.tsx";

createRoot(document.getElementById("root")!).render(
  <DesktopContextProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </DesktopContextProvider>
);
