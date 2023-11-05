import Chip from "./category/Chip";
import ScrollOut from "scroll-out";

export default function MainCard({
  location,
  category,
  title,
  subTitle,
  price,
  src,
}) {
  return (
    <li className="max-w-fit border-[0.1px] border-[#11434A] rounded-lg card-skew">
      <img className="image-quality-improve " src={src} alt="공유공간 카드" />
      <div className="px-5 py-6">
        <header className={`flex gap-1`}>
          <Chip
            color={"green"}
            size={"small"}
            chipInfo={location}
            isPicked={true}
            onClickEvent={null}
          ></Chip>
          <Chip
            color={"red"}
            size={"small"}
            chipInfo={category}
            isPicked={true}
            onClickEvent={null}
          ></Chip>
        </header>
        <main className="mt-6">
          <h1 className="text-xl font-bold">{title}</h1>
          <p className="text-sm mt-3 font-light">{subTitle}</p>
        </main>
        <aside className="mt-8 text-xl flex justify-end">
          <span className="mr-1">월</span>
          <span className="mr-1">{price}</span>
          <span>원</span>
        </aside>
      </div>
    </li>
  );
}
