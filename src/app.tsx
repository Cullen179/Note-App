import React, { useState } from "react";
import { Button } from "./components/ui/button";
import { setOnTop } from "./renderer";

export default function App() {
    
    const [isAlwaysOnTop, setIsAlwaysOnTop] = useState(false);

    return (
        <div>
            <Button onClick={
                () => {
                    setIsAlwaysOnTop(isAlwaysOnTop => !isAlwaysOnTop);
                    setOnTop(!isAlwaysOnTop);
                }
            }>
                {isAlwaysOnTop ? "On Top" : "Not On Top"}
            </Button>
        </div>
    );
}