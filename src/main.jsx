import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/src/css/main.css";
import App from "/src/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
