export default function Header() {
  return (
    <header className="w-1/1 py-1 px-20 lg:px-60 flex justify-between items-center shadow-md">
      <div>
        <img
          className="image-quality-improve"
          src="src/img/header-logo.png"
          alt="바로여기 로고"
        />
      </div>
      <div>
        <button className="mr-10">공유공간 찾기</button>
        <button className="">로그인</button>
      </div>
    </header>
  );
}
