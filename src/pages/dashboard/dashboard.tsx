import React, { useRef, useState } from "react";
import { ImperativePanelHandle } from "react-resizable-panels";
import NavBar from "@/pages/dashboard/NavigationBar";
import { Size } from "@/types";
import Panel from "./Panel";

export default function DashboardPage() {
  const [size, setSize] = useState<Size>({
    left: 25,
    right: 75,
  });

  const [isMobile, setIsMobile] = useState(false);

  const left = useRef<ImperativePanelHandle>(null);
  const right = useRef<ImperativePanelHandle>(null);
  
  window.electronAPI.onResize((isSmall: boolean) => {
    const leftPanel = left.current;
    if (leftPanel) {
      if (isSmall) {
        leftPanel.collapse();
        setIsMobile(true);
      } else {
        leftPanel.expand();
        setIsMobile(false);
      }
    }
  });

  return (
    <div className="h-full flex flex-col">
      <NavBar
        size={size}
        left={left}
        right={right}
        isMobile={isMobile}
      />

      <Panel 
        size={size}
        setSize={setSize}
        left={left}
        right={right}
      />
    </div>
  );
}
