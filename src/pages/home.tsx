import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { Typography } from "@/components/ui/typography";

export default function IndexPage() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center max-w-7xl mx-auto w-full relative px-4 space-y-10">
        <div className="space-y-3">
          <Typography className="text-center" variant="h1">
            Note Taking App
          </Typography>
          <p className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-mdmx-auto">
            This globe is interactive and customizable. Have fun with it, and
            don&apos;t forget to share it. :)
          </p>
        </div>
        <SignIn forceRedirectUrl="/dashboard"/>
      </div>
    </div>
  );
}
