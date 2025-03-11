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
      className={`w-full cursor-pointer rounded-lg ${
        isLogin ? "bg-purple-blue text-black" : "bg-black text-white"
      }`}
      href={lowerPathName}
    >
      <button className="gap-2 whitespace-nowrap text-xl font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 shadow hover:opacity-90 h-12 px-4 py-2 flex w-full items-center justify-center">
        {children}
        <span className="block">{name}</span>
      </button>
    </Link>
  );
}
