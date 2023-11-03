interface MainCardProps {
  location: string;
  category: string;
  title: string;
  subTitle: string;
  price: string;
  src: string;
}

export default function MainCard({
  location,
  category,
  title,
  subTitle,
  price,
  src,
}: MainCardProps) {
  return (
    <li className="max-w-fit border-[1px] border-[#11434A] rounded-lg card-skew">
      <img className="image-quality-improve " src={src} alt="공유공간 카드" />
      <div className="px-5 py-6">
        <header className="">
          <span className="text-xs font-semibold text-[#11434A] bg-[#B6D8DD] border-[1px] border-[#11434A] rounded-lg px-5 py-1">
            {location}
          </span>
          <span className="text-xs font-semibold text-[#DB1A00] ml-2 bg-[#FFCAC3] border-[1px] border-[#DB1A00] rounded-lg px-5 py-1">
            {category}
          </span>
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
