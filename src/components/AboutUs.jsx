import React from "react";
import "../index.css";
import aboutImg from "../assets/girl (lp).png";

function AboutUs() {
  return (
    <section className="my-20 lg:my-40 gray-gradient lg:px-64 flex justify-between text-center lg:text-left px-10 h-[516px] lg:h-[467px]">
      <img
        src={aboutImg}
        className="hidden lg:block lg:h-[467px] lg:w-[384px]"
      ></img>
      <div className="w-full lg:w-[48%] flex flex-col items-center lg:items-start justify-center  gap-10 lg:gap-6">
        <h2 className="font-poppins font-medium text-4xl">About Us</h2>
        <p className="text-sm lg:text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. t has survived not only
          five centuries.
        </p>
        <button
          style={{ backgroundColor: "#E23744" }}
          className="rounded-full w-32 lg:w-40 h-10 lg:h-12 text-white font-bold text-sm lg:text-base"
        >
          Read More
        </button>
      </div>
    </section>
  );
}

export default AboutUs;
