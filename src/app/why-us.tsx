import React from "react";
import { FaBus } from "react-icons/fa";

const ChooseUs = () => {
  return (
    <>
      <div className="bg-gray-100 pb-40 ">
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="py-8 tracking-wider text-3xl font-semibold text-center pt-36 "
        >
          Why Choose Us
        </h1>
        <div
          data-aos="fade"
          data-aos-duration="2000"
          className=" flex justify-evenly mt-10 p-4 font-semibold  max-sm:flex-wrap max-sm:justify-between"
        >
          {/* div 1 */}
          <div className="text-center  flex justify-center items-center flex-col  gap-5">
            <p>
              Sourced directly from local farms, every meal is nutrient-rich and
              bursting with fresh flavor.
            </p>
            <p className="text-5xl text-pink-600 rotate-90">....</p>
            <FaBus className="text-5xl mr-8 text-pink-600" />
          </div>
          {/* div 2 */}
          <div className="text-center flex justify-center items-center flex-col  max-sm:flex-col-reverse gap-5">
            <FaBus className="text-5xl mr-8 text-teal-500" />
            <p className="text-5xl text-teal-500 rotate-90">....</p>
            <p className="">
              {" "}
              Our meals deliver the perfect blend of vitamins, proteins, and
              healthy fats for your wellness.{" "}
            </p>
          </div>
          {/* div 3 */}
          <div className="text-center flex justify-center items-center flex-col  gap-5">
            <p>
              We use eco-friendly packaging and sustainable sourcing for
              guilt-free, delicious food.
            </p>
            <p className="text-5xl text-pink-600 rotate-90">....</p>
            <FaBus className="text-5xl mr-8 text-pink-600" />
          </div>
          {/* div 4 */}
          <div className="text-center flex justify-center items-center flex-col max-sm:flex-col-reverse gap-5">
            <FaBus className="text-5xl mr-8 text-teal-500" />
            <p className="text-5xl text-teal-500 rotate-90">....</p>
            <p>
              A wide range of wholesome options delivered easily, making healthy
              eating simple and satisfying.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUs;
