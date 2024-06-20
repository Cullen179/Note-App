import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Note, Size } from "@/types";
import React, { useState } from "react";
import { ImperativePanelHandle } from "react-resizable-panels";
import NoteList from "./NoteList";

interface PanelProps {
  size: Size;
  setSize: React.Dispatch<React.SetStateAction<Size>>;
  left: React.RefObject<ImperativePanelHandle>;
  right: React.RefObject<ImperativePanelHandle>;
}

export default function Panel({ size, setSize, left, right }: PanelProps) {
  const onResize = (size: Partial<Size>) => {
    setSize((prevSize: Size) => ({
      ...prevSize,
      ...size,
    }));
  };

  const [isSelected, setIsSelected] = useState<Note['id']>("");

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="rounded-lg border"
      autoSaveId="persistence"
    >
      <ResizablePanel
        collapsible
        ref={left}
        id="panel"
        minSize={15}      
        onResize={(left) => onResize({ left })}
        className="bg-card"
      >
        <NoteList
          isSlected={isSelected}
          setIsSelected={setIsSelected}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel
        defaultSize={size.right}
        ref={right}
        onResize={(right) => onResize({ right })}
      >
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-semibold">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
