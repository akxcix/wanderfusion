import { Separator } from "@radix-ui/react-separator";
import React, { ReactNode } from "react";

interface SplitCardProps {
  children: ReactNode;
  imgSrc: string;
}

const SplitCard: React.FC<SplitCardProps> = ({ children, imgSrc }) => {
  return (
    <div className="flex flex-row p-2 space-x-2 rounded-md border">
      <div className="w-1/2 self-center">
        <img className="w-max rounded-md border" src={imgSrc} />
      </div>
      <div className="w-1/2 flex items-center">
        <div className="flex-grow flex items-center justify-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default SplitCard;
