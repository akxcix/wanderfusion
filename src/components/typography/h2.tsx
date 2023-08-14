import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyH2Props {
  children: ReactNode;
  className?: string;
}

const TypographyH2: React.FC<TypographyH2Props> = ({ className, children }) => {
  return (
    <h2
      className={cn(
        className,
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0"
      )}
    >
      {children}
    </h2>
  );
};

export default TypographyH2;
