import React from "react";
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p className="justify-normal">
          Our team is dedicated to providing a dining experience that is second
          to none. From the moment you walk in, you’ll be treated with warmth
          and professionalism. Our attentive staff is here to ensure that every
          detail of your visit is perfect, from helping you choose the perfect
          wine to accommodating any special dietary needs.
        </p>
        <p>
          we go above and beyond to provide a dining experience that stands out.
          Our seasonal menus, special events, and personalized service make
          every visit unique. We believe that dining should be more than just a
          meal – it should be an experience to savor and remember.
        </p>
        <div className=" flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
