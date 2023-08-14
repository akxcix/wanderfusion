import React, { ReactNode } from "react";
import { buttonVariants } from "./button";
import { cn } from "@/lib/utils";

interface ButtonLinkProps {
  className?: string;
  children: ReactNode;
  href: string;
  variant: "default" | "secondary" | "destructive" | "outline" | "ghost";
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  className,
  children,
  href,
  variant,
}) => {
  return (
    <a
      href={href}
      className={cn(buttonVariants({ variant: variant }), className, "w-max")}
    >
      {children}
    </a>
  );
};

export default ButtonLink;
