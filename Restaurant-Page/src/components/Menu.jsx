import React from "react";
import DishesCard from "../layouts/DishesCard";
import img1 from "../assets/img/img1.jpg";
import img2 from "../assets/img/img2.jpg";
import img3 from "../assets/img/img3.jpg";
import img4 from "../assets/img/img4.jpg";
import img5 from "../assets/img/img5.jpg";
import img6 from "../assets/img/img6.jpg";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Premium Menu
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Chiken" price="200 Rs." />
        <DishesCard img={img2} title="Fish Dish" price="400 Rs." />
        <DishesCard img={img3} title="Pasta" price="300 Rs." />
        <DishesCard img={img4} title="Panner" price="250 Rs." />
        <DishesCard img={img5} title="Fried Rice" price="200 Rs." />
        <DishesCard img={img6} title="Fish Angara" price="300 Rs." />
      </div>
    </div>
  );
};

export default Menu;
