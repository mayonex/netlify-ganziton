import React from "react";
import { DividerImg } from "../assets/images";

export default function Divider({ color }) {
  return (
    <div className="my-2 w-full flex justify-center">
      {color === "my-light-red" ? (
        <img src={DividerImg.red} />
      ) : (
        <img src={DividerImg.green} />
      )}
    </div>
  );
}
