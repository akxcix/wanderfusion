import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyH3Props {
  children: ReactNode;
  className?: string;
}

const TypographyH3: React.FC<TypographyH3Props> = ({ className, children }) => {
  return (
    <h3
      className={cn(
        className,
        "scroll-m-20 text-2xl font-semibold tracking-tight"
      )}
    >
      {children}
    </h3>
  );
};

export default TypographyH3;
