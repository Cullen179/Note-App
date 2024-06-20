import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { setOnTop } from "./renderer";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function App() {
    const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false);

    return (
      <div className="flex space-x-2">
        <Button
          data-testid="on-top-btn"
          onClick={() => {
            setIsAlwaysOnTop((isAlwaysOnTop) => !isAlwaysOnTop);
            setOnTop(!isAlwaysOnTop);
          }}
        >
          {isAlwaysOnTop ? "On Top" : "Not On Top"}
        </Button>
        <div>
          <Link to="/">Home</Link>
        </div>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    );
}