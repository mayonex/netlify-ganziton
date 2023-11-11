// import React from "react";

interface props {
  content: string;
  color: "green" | "red";
  type: "submit" | "button";
  onClickEvent: () => void;
  width?: string;
}

const BaisicButton = ({
  content,
  color,
  type = "button",
  onClickEvent,
  width = "18.75rem",
}: props) => {
  return (
    <button
      className={`flex justify-center items-center rounded-md p-4 font-semibold min-w-[12rem] ${
        color === "red" ? "text-my-red" : "text-my-green"
      }`}
      style={{
        boxShadow: "0px 0px 5px 2px rgba(0, 0, 0, 0.25)",
        width: `${width}`,
      }}
      onClick={onClickEvent}
      type={type}
    >
      {content}
    </button>
  );
};

export default BaisicButton;
