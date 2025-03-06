import Link from "next/link";
import { ReactNode } from "react";

interface SidebarButtonProps {
  name: string;
  children: ReactNode;
}

export default function SidebarButton({ children, name }: SidebarButtonProps) {
  return (
    <li className="group/menu-item relative">
      {children}
      <Link href={name} className="cursor-pointer">
        {name}
      </Link>
    </li>
  );
}
