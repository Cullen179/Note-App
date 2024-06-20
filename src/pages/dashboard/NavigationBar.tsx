import React from "react";
import { Button } from "../../components/ui/button";
import { AudioWaveform, Expand, FilePen, LockKeyhole, LockKeyholeOpen, PanelLeftClose, PanelRightClose, Search } from "lucide-react";
import { Size } from "@/types";
import { ImperativePanelHandle } from "react-resizable-panels";
import { SignedIn, UserButton } from "@clerk/clerk-react";
import { setOnTop } from "@/renderer";

interface NavBarProps {
  size: Size;
  left: React.RefObject<ImperativePanelHandle>;
  right: React.RefObject<ImperativePanelHandle>;
  isMobile: boolean;
}

export default function NavBar({ size, left, right, isMobile }: NavBarProps) {

  const [isAlwaysOnTop, setIsAlwaysOnTop] = React.useState(false);

  const onFullPanel = () => {
    if (size.left == 0) {
      left.current?.resize(100);
    } else if (size.right == 0) {
      right.current?.resize(100);
    } else {
      left.current?.resize(0);
    }
  };

  return (
    <nav className="flex w-full items-center justify-between px-3 py-[2px] *:space-x-1">

      {/* New Note + Audio */}
      <div>
        {isMobile ? (
          <Button
            size="icon"
            variant="ghost"
            onClick={onFullPanel}
          >
            {size.left == 0 ? <PanelRightClose /> : <PanelLeftClose />}
          </Button>
        ) : (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => {
              left.current?.resize(25);
            }}
          >
            <Expand />
          </Button>
        )}
        <Button
          size="icon"
          variant="ghost"
        >
          <FilePen />
        </Button>
        <Button
          size="icon"
          variant="ghost"
        >
          <AudioWaveform />
        </Button>
      </div>

      {/* Search bar */}
      <Button className="flex-1 max-w-[500px]" size="sm" variant="outline">
        <Search />
        <div className="hidden sm:block">
          Search...
        </div>
      </Button>

      {/* onTop + UserProfile */}
      <div className="flex">
        <Button
          data-testid="on-top-btn"
          variant="ghost"
          size="icon"
          onClick={() => {
            setIsAlwaysOnTop((isAlwaysOnTop) => !isAlwaysOnTop);
            setOnTop(!isAlwaysOnTop);
          }}
        >
          {isAlwaysOnTop ? <LockKeyhole /> : <LockKeyholeOpen />}
        </Button>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
}
