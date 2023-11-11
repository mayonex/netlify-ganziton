interface props {
  color: "red" | "green";
  size?: "small" | "normal";
  chipInfo: string;
  isPicked: boolean;
  onClickEvent?: (chipInfo: string) => void;
}

const Chip = ({
  color,
  size = "normal",
  chipInfo,
  isPicked,
  onClickEvent,
}: props) => {
  return (
    <div
      className={`flex justify-center items-center border border-solid cursor-pointer font-semibold ${
        color === "red"
          ? "border-my-red text-my-red"
          : "border-my-green text-my-green"
      } ${
        color === "red"
          ? isPicked
            ? "bg-my-light-red"
            : "bg-white"
          : isPicked
          ? "bg-my-light-green"
          : "bg-white"
      }
      ${
        size === "small"
          ? "w-fit min-w-fit text-xs px-5 py-1 rounded-lg"
          : "min-w-[5.875rem] p-2 rounded-xl"
      }`}
      onClick={() => onClickEvent && onClickEvent(chipInfo)}
    >
      {chipInfo}
    </div>
  );
};

export default Chip;
