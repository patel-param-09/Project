import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard
          img={img1}
          name="Sophia Azura"
          review="I had an amazing dining experience at last weekend. From the moment we walked in, we were greeted with friendly smiles and impeccable service. The ambiance was warm and inviting, perfect for a date night. The food was outstanding – every dish was beautifully presented and bursting with flavor. I highly recommend the seafood risotto; it was simply divine. We’ll definitely be back!"
        />
        <ReviewCard
          img={img2}
          name="John Deo"
          review="This Restaurant is our go-to place for family dinners. The menu offers something for everyone, and the kids love the special attention they receive from the staff. The quality of the food is consistently excellent, and you can tell that they use fresh, local ingredients. My favorite dish is the grilled steak – cooked to perfection every time. The staff is always accommodating, making each visit a pleasure. Highly recommend!"
        />
        <ReviewCard
          img={img3}
          name="Victoria Zoe"
          review="I recently celebrated my birthday at This Restaurant, and it was a fantastic experience from start to finish. The staff went above and beyond to make our evening special, even surprising us with a complimentary dessert. The atmosphere is elegant yet cozy, perfect for a special occasion. The food was exceptional, with each course surpassing the last. The lobster bisque was the best I’ve ever had. Thank you, for making my birthday memorable!"
        />
      </div>
    </div>
  );
};

export default Review;
