"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface SidebarContextType {
  isOpenSidebar: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export default function SidebarProvider({ children }: { children: ReactNode }) {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const toggleSidebar = () => setIsOpenSidebar((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isOpenSidebar, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }

  return context;
};
