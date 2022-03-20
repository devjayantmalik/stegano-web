import React from "react";
import NextLink from "next/link";
import clsx from "clsx";

export interface IAnchorProps {
  className?: string;
  href: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  color?: "nav" | "link";
}

export const Anchor: React.FC<IAnchorProps> = ({ className, href, children, onClick, color }) => {
  return (
    <NextLink href={href}>
      <a
        onClick={onClick}
        className={clsx(
          "font-medium text-gray-600 hover:text-gray-500",
          className,
          color === "link" && "text-indigo-600 hover:text-indigo-500 underline"
        )}>
        {children}
      </a>
    </NextLink>
  );
};
