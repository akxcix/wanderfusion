import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyH4Props {
  children: ReactNode;
  className?: string;
}

const TypographyH4: React.FC<TypographyH4Props> = ({ className, children }) => {
  return (
    <h4
      className={cn(
        className,
        "scroll-m-20 text-xl font-semibold tracking-tight"
      )}
    >
      {children}
    </h4>
  );
};

export default TypographyH4;
