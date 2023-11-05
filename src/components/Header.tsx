import { Link } from "react-router-dom";
import { logo } from "../assets/images";

export default function Header() {
  return (
    <header
      className="w-1/1 py-1 px-20 lg:px-60 flex justify-between items-center shadow-md bg-white"
      style={{ height: "var(--height-header)" }}
    >
      <div>
        <Link to="/">
          <img
            className="image-quality-improve"
            src={logo.header}
            alt="바로여기 로고"
          />
        </Link>
      </div>
      <div>
        <button className="mr-10">
          <Link to="places">공유공간 찾기</Link>
        </button>
        <button>로그인</button>
      </div>
    </header>
  );
}
