import React from "react";
import icon from "../assets/Screenshot_669 1.png";
import vector from "../assets/Vector 1.png";
import img from "../assets/Group 289.png";

function Header() {
  return (
    <>
      <img
        src={img}
        className="lg:absolute top-0 lg:right-0"
        alt="Background"
      />
      <img
        src={vector}
        className="absolute top-0 lg:right-0 z-10"
        alt="Vector"
      />
      <header className="flex justify-between items-center z-50 lg:mt-5 w-10/12 mx-auto">
        <img
          src={icon}
          className="opacity-0 lg:opacity-100 lg:h-[83px] lg:w-[107px]"
          alt="Icon"
        />
        <button className="absolute top-5 lg:top-10 right-5 rounded-full w-[95px] h-[31px] lg:w-40 lg:h-12 text-white font-bold z-20 border border-white text-xs lg:text-base">
          Get in Touch
        </button>
      </header>
      <main className="w-9/12 lg:w-10/12 mx-auto">
        <section className="lg:w-[30%] lg:h-screen flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <h1 className="font-black text-4xl lg:text-6xl">
            Discover the <span style={{ color: "#E23744" }}>Best</span> Food and
            Drinks
          </h1>
          <p className="my-10 lg:w-11/12 text-sm lg:text-base">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button
            style={{ backgroundColor: "#E23744" }}
            className="rounded-full w-48 h-16 text-white font-bold z-50 border text-lg"
          >
            Explore Now!
          </button>
        </section>
      </main>
    </>
  );
}

export default Header;
