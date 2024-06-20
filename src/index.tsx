import { createRoot } from "react-dom/client";
import React, { StrictMode } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./layouts/root";
import IndexPage from "./pages/home";
import DashboardLayout from "./layouts/dashboard";
import DashboardPage from "./pages/dashboard/dashboard";
import { fetchNotes } from "./pages/dashboard/fetch";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

// Render your React component instead
document.documentElement.classList.add("dark");

const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            { path: "/", element: <IndexPage /> },
            { path: "/sign-in", element: <></>},
            {
                element: <DashboardLayout />,
                path: "dashboard",
                children: [
                    { path: "/dashboard", element: <></>},
                    { path: "/dashboard/:userID", element: <DashboardPage />, loader: ({ params }) => fetchNotes(params.userID) },
                ]
            }
        ]
    }
]);

const root = createRoot(document.getElementById("app"));

root.render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
