import { useSidebar } from "@/context/SidebarContext";
import AuthButton from "./AuthButton";
import SidebarButton from "./SidebarButton";
import Link from "next/link";

export default function Sidebar() {
  const { isOpenSidebar } = useSidebar();

  return (
    <div
      className={`fixed z-50 ${
        isOpenSidebar ? "translate-x-0" : "-translate-x-full"
      }  gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden`}
    >
      <div className="flex size-full flex-col">
        <div className="flex flex-col gap-2 p-2">
          <Link
            className="flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left outline-none ring-sidebar-ring transition-[width,height,padding] focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:!size-8 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground h-12 text-sm group-data-[collapsible=icon]:!p-0 group/link"
            href="/"
          >
            {"🧞‍♂️"}
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-semibold">UIGenie AI</span>
              <span className="truncate text-xs text-sidebar-primary group-hover/link:text-sidebar-primary-foreground">
                AI-powered Tailwind CSS and Chakra UI
              </span>
            </div>
          </Link>
        </div>

        <ul className="flex w-full min-w-0 flex-col gap-1">
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

        <div data-sidebar="footer" className="flex flex-col gap-2 p-2">
          <div data-sidebar="footer" className="flex flex-col gap-2 p-2">
            <div className="p-1 visible opacity-100 transition-opacity delay-200 duration-500">
              <div className="rounded-lg border text-card-foreground bg-background shadow-none">
                <form>
                  <div className="flex flex-col space-y-1.5 p-4">
                    <div className="font-semibold tracking-tight flex items-center gap-1 text-xs">
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
                    <div className="text-muted-foreground text-xs">
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
