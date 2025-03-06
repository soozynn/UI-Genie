import Link from "next/link";
import { ReactNode } from "react";

interface AuthButtonProps {
  name: string;
  children: ReactNode;
}

export default function AuthButton({ children, name }: AuthButtonProps) {
  return (
    <Link className="w-full" href={name}>
      <button className="gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 flex w-full items-center justify-center">
        {children}
        <span className="block">{name}</span>
      </button>
    </Link>
  );
}
