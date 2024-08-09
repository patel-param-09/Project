import React from "react";
import menu1 from "../assets/img/menu1.jpg";
import menu2 from "../assets/img/menu2.jpg";
import menu3 from "../assets/img/menu3.jpg";
import menu5 from "../assets/img/menu5.jpg";
import menu6 from "../assets/img/menu6.jpg";
import menu7 from "../assets/img/menu7.jpg";
import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Special Malai Chaap" price="300 Rs." />
        <DishesCard img={menu2} title="Veg. Biryani" price="400 Rs." />
        <DishesCard img={menu3} title="cheese Balls" price="250 Rs." />
        <DishesCard img={menu5} title="Soy Glazed" price="350 Rs." />
        <DishesCard img={menu6} title="Panner Butter Masala" price="400 Rs." />
        <DishesCard img={menu7} title="Dal Tadka" price="350 Rs." />
      </div>
    </div>
  );
};

export default Dishes;
