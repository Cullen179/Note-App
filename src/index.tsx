import { createRoot } from "react-dom/client";
import App from "./app";
import React, { StrictMode } from "react";

// Render your React component instead
document.documentElement.classList.add("dark");
const root = createRoot(document.getElementById("app"));
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);
