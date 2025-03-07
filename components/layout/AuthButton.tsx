import Link from "next/link";
import { ReactNode } from "react";

interface AuthButtonProps {
  name: string;
  children: ReactNode;
}

export default function AuthButton({ children, name }: AuthButtonProps) {
  const isLogin = name === "Login";
  const lowerPathName = name.toLowerCase();

  return (
    <Link
      className={`w-full cursor-pointer ${
        isLogin ? "bg-neon-blue text-soft-dark" : "bg-soft-dark text-white"
      }`}
      href={lowerPathName}
    >
      <button className="gap-2 whitespace-nowrap rounded-md text-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow hover:opacity-90 h-9 px-4 py-2 flex w-full items-center justify-center">
        {children}
        <span className="block">{lowerPathName}</span>
      </button>
    </Link>
  );
}
