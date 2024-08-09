import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/hero.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Elevate Your Inner Foodie with Every Bite.
        </h1>
        <p className=" text-backgroundColor">
          "Indulge in Flavors, Savor the Moments. Where Every Meal is a
          Celebration."
        </p>
        <p className=" text-backgroundColor">
          From intimate dinners to grand celebrations,Our Restaurant is the
          perfect setting for any occasion. Let us make your moments special
          with our exquisite cuisine and exceptional service.
        </p>
        <div className=" lg:pl-44">
          <Button title="Order Now" />
        </div>
      </div>
    </div>
  );
};

export default Home;
