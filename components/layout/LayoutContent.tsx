"use client";

import { useSidebar } from "@/context/SidebarContext";
import Sidebar from "./Sidebar";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isOpenSidebar, toggleSidebar } = useSidebar(); // 사이드바 상태 가져오기

  return (
    <>
      <Sidebar />
      <main
        className={`absolute inset-0 flex items-center justify-center transition-opacity ${
          isOpenSidebar ? "bg-black/50" : ""
        }`}
        onClick={() => {
          if (isOpenSidebar) toggleSidebar();
        }}
      >
        {children}
      </main>
    </>
  );
}
