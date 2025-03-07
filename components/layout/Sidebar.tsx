"use client";

import { useSidebar } from "@/context/SidebarContext";
import Link from "next/link";
import AuthButton from "./AuthButton";
import SidebarButton from "./SidebarButton";
import Image from "next/image";

export default function Sidebar() {
  const { isOpenSidebar } = useSidebar();

  return (
    <div
      className={`${
        isOpenSidebar ? "translate-x-0" : "-translate-x-full"
      } fixed z-50 gap-4 shadow-lg transition ease-in-out inset-y-0 left-0 h-full border-r sm:w-100 p-1 [&>button]:hidden bg-grey-dark border-none`}
    >
      <div className="flex size-full flex-col">
        <div className="flex flex-col gap-2 py-4 px-2 border-none">
          <Link
            className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none transition-[width,height,padding] disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 h-12 text-sm"
            href="/"
          >
            <Image src="/lamp.svg" alt="Logo" width={50} height={60} priority />

            <div className="grid flex-1 text-left text-lg leading-tight">
              <span className="truncate font-semibold text-dark-grey">
                UI Genie AI
              </span>
              <span className="truncate text-base text-sidebar-primary text-neon-blue">
                AI-powered CSS with UI Genie
              </span>
            </div>
          </Link>
        </div>

        <div className="grow p-2 pt-3 text-white">
          <div className="duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-base font-medium outline-none transition-[margin,opa] ease-linear text-grey-dark">
            Choose the AI
          </div>

          <ul className="flex w-full min-w-0 flex-col">
            <SidebarButton name="Tailwind AI">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                />
              </svg>
            </SidebarButton>
            <SidebarButton name="Chakra AI">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                />
              </svg>
            </SidebarButton>
          </ul>
        </div>

        <div data-sidebar="footer" className="flex flex-col gap-2 p-2">
          <div data-sidebar="footer" className="flex flex-col gap-2 p-2">
            <div className="p-1 visible opacity-100 transition-opacity delay-200 duration-500">
              <div className="rounded-lg border text-card-foreground bg-background shadow-none">
                <form>
                  <div className="flex flex-col space-y-1.5 p-4">
                    <div className="text-white font-semibold flex items-center gap-1 text-base">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                        />
                      </svg>
                      Add-on
                    </div>
                    <div className="text-muted-foreground text-sm text-dark-grey">
                      {"We're going to add features slowly 😊"}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col items-center space-y-2">
            <AuthButton name="Login">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                />
              </svg>
            </AuthButton>
            <AuthButton name="Register">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
            </AuthButton>
          </div>
        </div>
      </div>
    </div>
  );
}
