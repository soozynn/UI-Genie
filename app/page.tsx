export default function Home() {
  return (
    <div className="flex flex-col p-2">
      <div className="flex flex-col items-center justify-center space-y-1.5">
        <h2 className="text-4xl font-medium sm:text-5xl" data-testid="home-h2">
          Create. <span className="text-purple-blue">Refine. </span>
          Deliver.
        </h2>
        <p className="text-center font-normal">
          <div>
            Build fully responsive{" "}
            <span className="font-semibold">
              Tailwind or Chakra UI Websites
            </span>{" "}
            effortlessly using
          </div>
          <div>
            <span className="font-semibold">AI-powered </span>
            text prompts and image inputs.
          </div>
        </p>
      </div>

      <form>
        <div>폼 작성하는 자리 / x 버튼을 통해 기존 작성 내용 삭제</div>
        <div>
          라이브러리 및 프레임워크 선택 자리, 이미지도 업로드 가능하면.. 좋곘..
          검색 버튼
        </div>
      </form>
    </div>
  );
}
