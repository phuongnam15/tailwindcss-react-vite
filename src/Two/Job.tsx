import { ReactNode } from "react";
import React from "react";

interface JobProps {
  title: string;
  bgClass: string;
  icon: ReactNode;
}

export const Job: React.FC<JobProps> = ({
  title,
  bgClass,
  icon,
}): JSX.Element => {
  return (
    <div
      className={`${bgClass} flex aspect-square cursor-pointer flex-col items-center justify-center rounded-md p-4 hover:border hover:border-gray-300 hover:bg-opacity-0`}
    >
      {icon}
      <p className="mt-2">{title}</p>
    </div>
  );
};
