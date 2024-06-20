import React from "react";
import { ClerkProvider } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "react-router-dom";

// Import your publishable key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function Root() {
    const navigate = useNavigate();
    
    return (
        <ClerkProvider
            publishableKey={PUBLISHABLE_KEY}
            routerPush={(to) => navigate(to)}
            routerReplace={(to) => navigate(to, { replace: true })}
        >
            <Outlet />
        </ClerkProvider>
    );
}
