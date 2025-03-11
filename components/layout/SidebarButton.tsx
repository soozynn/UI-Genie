"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { usePathname } from "next/navigation";

interface SidebarButtonProps {
  name: string;
  children: ReactNode;
}

export default function SidebarButton({ children, name }: SidebarButtonProps) {
  const pathname = usePathname();

  const isTailwind = name === "Tailwind AI";
  const firstWord = name.split(" ")[0].toLowerCase();
  const href = isTailwind ? "/" : `/${firstWord}`;
  const isActive = pathname === href || (isTailwind && pathname === "/");

  return (
    <li
      className={`flex items-center rounded-xl text-lg p-2 ${
        isActive ? "bg-neon-blue text-white" : "bg-transparent text-dark-blue"
      }`}
    >
      {children}
      <Link
        href={href}
        className="flex w-full items-center gap-1 overflow-hidden rounded-md p-2 text-left outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 h-8"
      >
        {name}
      </Link>
    </li>
  );
}
