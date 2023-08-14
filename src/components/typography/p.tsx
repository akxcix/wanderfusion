import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyPProps {
  children: ReactNode;
  className?: string;
}

const TypographyP: React.FC<TypographyPProps> = ({ className, children }) => {
  return (
    <p className={cn(className, "leading-7 [&:not(:first-child)]:mt-6")}>
      {children}
    </p>
  );
};

export default TypographyP;
