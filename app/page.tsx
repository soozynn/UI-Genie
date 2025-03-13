export default function Home() {
  return (
    <div className="p-2 pt-10 sm:px-11 sm:pt-2 flex flex-col space-y-4 overflow-hidden pr-2 sm:pr-11">
      <div className="flex flex-col space-y-1.5 items-center justify-center">
        <h2
          className="text-4xl font-medium tracking-tighter sm:text-5xl"
          data-testid="home-h2"
        >
          Create.
          <span>Refine.</span>
          Deliver.
        </h2>
        <p className="text-center font-normal">
          Build fully responsive{" "}
          <span className="font-semibold">Tailwind or Chakra UI Websites</span>{" "}
          effortlessly using <span className="font-semibold">AI-powered </span>
          text prompts and image inputs.
        </p>
      </div>

      <form>폼 기능 자리 // 매우 중요</form>
    </div>
  );
}
