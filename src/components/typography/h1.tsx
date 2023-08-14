import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyH1Props {
  children: ReactNode;
  className?: string;
}

const TypographyH1: React.FC<TypographyH1Props> = ({ className, children }) => {
  return (
    <h1
      className={cn(
        className,
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl"
      )}
    >
      {children}
    </h1>
  );
};

export default TypographyH1;
