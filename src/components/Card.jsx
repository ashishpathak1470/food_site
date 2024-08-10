import React from "react";

export const Card = (props) => {
  return (
    <div className="flex flex-col items-center gap-10 lg:w-[30%] p-7 border border-[#93A2D3] rounded-2xl text-[#444957] text-sm">
      <img src={props.Image}></img>
      <h2 className="font-poppins text-[#0E2368] text-xl lg:text-2xl font-bold">
        {props.Title}
      </h2>
      <p className="tracking-wide text-[#444957]">{props.Description}</p>
      <button className="rounded-3xl w-32 lg:w-40 h-10 lg:h-12 font-bold z-50 border-2 border-[#424961]">
        Read More
      </button>
    </div>
  );
};
