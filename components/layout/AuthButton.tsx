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
      className={`flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-lg px-4 py-2 text-xl font-medium whitespace-nowrap shadow transition-colors ${
        isLogin
          ? "bg-purple-blue text-black hover:brightness-75"
          : "bg-black text-white hover:bg-gray-900"
      }`}
      href={lowerPathName}
    >
      {children}
      <span className="block">{name}</span>
    </Link>
  );
}
