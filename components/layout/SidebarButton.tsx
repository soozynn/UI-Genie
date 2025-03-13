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
      className={`hover:bg-purple-blue flex items-center rounded-xl p-2 text-lg ${
        isActive ? "bg-purple-blue text-white" : "text-dark-blue bg-transparent"
      }`}
    >
      {children}
      <Link
        href={href}
        className="flex h-8 w-full items-center gap-1 overflow-hidden rounded-md p-2 text-left outline-none disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50"
      >
        {name}
      </Link>
    </li>
  );
}
