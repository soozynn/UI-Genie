"use client";

import { useSidebar } from "@/context/SidebarContext";

export default function Home() {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <button
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground size-9 h-7 w-7 fixed z-50 m-2"
        data-sidebar="trigger"
        onClick={toggleSidebar}
      >
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
            d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>

      <div className="size-full p-2 pt-10 sm:px-11 sm:pt-2 relative flex min-h-full w-auto flex-col items-center justify-center space-y-4 overflow-hidden pr-2 sm:pr-11">
        <div className="flex w-full flex-col items-center space-y-1.5">
          <h2
            className="text-4xl font-medium tracking-tighter sm:text-5xl"
            data-testid="home-h2"
          >
            Create.
            <span className="text-primary">Refine.</span>
            Deliver.
          </h2>
          <p className="text-center font-normal">
            Build fully responsive{" "}
            <span className="font-semibold">
              Tailwind or Chakra UI Websites
            </span>{" "}
            effortlessly using
            <span className="font-semibold">AI-powered</span>
            text prompts and image inputs.
          </p>
        </div>

        <form>폼 기능 자리 // 매우 중요</form>
      </div>
    </>
  );
}
