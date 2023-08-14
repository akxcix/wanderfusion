import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface TypographyListProps {
  children: ReactNode;
  className?: string;
}

const TypographyList: React.FC<TypographyListProps> = ({
  className,
  children,
}) => {
  return (
    <ul className={cn(className, "my-6 ml-6 list-disc [&>li]:mt-2")}>
      {children}
    </ul>
  );
};

export default TypographyList;
