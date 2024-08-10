import React, { useState } from "react";
import { Card } from "./Card";
import image1 from "../assets/grilled-tomatoes-1-846x846 1.png";
import image2 from "../assets/meal-prep-ideas-846x846 1.png";
import image3 from "../assets/meal-prep-ideas-846x846 1 (1).png";
import image4 from "../assets/grilled-tomatoes-1-846x846 1 (1).png";
import image5 from "../assets/meal-prep-ideas-846x846 1 (2).png";
import image6 from "../assets/meal-prep-ideas-846x846 1 (3).png";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineLeft } from "react-icons/ai";

const First_Article = [
  {
    Key: "1",
    Image: image1,
    Title: "Grilled Tomatoes at Home",
    Description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    Key: "2",
    Image: image2,
    Title: "Snacks for Travel",
    Description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    Key: "3",
    Image: image3,
    Title: "Post-Workout Recipes",
    Description:
      "PLoAem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
];

const Second_Article = [
  {
    Key: "4",
    Image: image4,
    Title: "How To Grill Corn",
    Description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    Key: "5",
    Image: image5,
    Title: "Crunchwrap Supreme",
    Description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
  {
    Key: "6",
    Image: image6,
    Title: "Brocolli Cheese Soup",
    Description:
      "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
  },
];

export const Container = () => {
  const [change, setChange] = useState(false);
  const ArticlesOne = First_Article.map((id) => {
    return (
      <Card
        Key={id.Key}
        Image={id.Image}
        Title={id.Title}
        Description={id.Description}
      />
    );
  });
  const ArticlesTwo = Second_Article.map((id) => {
    return (
      <Card
        Key={id.Key}
        Image={id.Image}
        Title={id.Title}
        Description={id.Description}
      />
    );
  });

  return (
    <section className="w-10/12 mx-auto">
      <h2 className="font-source text-4xl lg:text-5xl font-semibold tracking-wide">
        Latest Articles
      </h2>
      <div
        className={`${
          !change ? "flex" : "hidden"
        } flex-col lg:flex-row flex-wrap justify-between mt-16 gap-16 lg:gap-0`}
      >
        {ArticlesOne}
      </div>
      <div
        className={`${
          change ? "flex" : "hidden"
        } flex-col lg:flex-row flex-wrap justify-between mt-16 gap-16 lg:gap-0`}
      >
        {ArticlesTwo}
      </div>
      <div className="flex items-center gap-2 my-20 justify-center mt-11">
        <AiOutlineLeft
          className={`border ${
            change
              ? "text-[#424961] border-[#424961]"
              : "text-[#AFAFAF] border-[#AFAFAF]"
          } h-6 w-6 rounded-md cursor-pointer`}
          onClick={() => setChange(false)}
        />
        <span>{change ? "2/2" : "1/2"}</span>
        <AiOutlineRight
          className={`border ${
            !change
              ? "text-[#424961] border-[#424961]"
              : "text-[#AFAFAF] border-[#AFAFAF]"
          } h-6 w-6 border-black rounded-md cursor-pointer`}
          onClick={() => setChange(true)}
        />
      </div>
    </section>
  );
};
