import React from "react";
import { Link } from "react-router-dom";

import { ModeToggle } from "../mode-toggle";

import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";

const Navbar: React.FC = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => {
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur">
      <div
        className={cn(
          "flex p-4 justify-end items-center space-x-4 lg:space-x-6",
          className
        )}
        {...props}
      >
        <Link
          to="/"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Home
        </Link>
        <Link
          to="/profile"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Profile
        </Link>
        <ModeToggle />
      </div>
      <Separator />
    </div>
  );
};

export default Navbar;
