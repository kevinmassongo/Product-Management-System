import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RoutesApp from "./app/routesApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RoutesApp />
  </StrictMode>
);