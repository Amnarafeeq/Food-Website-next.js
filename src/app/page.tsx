"use client";
import Image from "next/image";
import Banner from "./banner";
import ChooseUs from "./why-us";
import About from "./about";
import Footer from "./footer";
import { FaArrowRight} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  // useeffect for aos
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);
  return (
    <>
      <div className="bg-[url(/Images/heroBg.png)] flex justify-around items-center pl-28 max-sm:flex-col-reverse max-sm:pl-0 max-sm:py-8 max-md:pl-10 max-md:py-10 max-md:leading-snug max-lg:pl-20 max-lg:py-24 max-lg:leading-snug ">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="flex flex-col max-sm:text-left"
        >
          <h1 className="text-5xl leading-relaxed max-sm:text-3xl max-sm:leading-snug">
            Fresh & Healthy Meal <br /> Plan
            <span className="text-teal-400"> Delivery</span> in Miami
          </h1>
          <p className="mt-5 font-semibold text-lg max-sm:text-base">
            Delicious Meals Delivered to Your Door <br />
            From $132.95 per week
          </p>
          <div className="flex items-center  mt-6 ">
            <button className="bg-pink-600 p-3 text-white font-semibold ">
              Choose Your Meal Plan
            </button>
            <span className="bg-pink-700 p-3.5 hover:translate-x-2 text-white text-xl">
              <FaArrowRight />
            </span>
          </div>
        </div>

        <div className="max-sm:mt-8">
          <Image
            data-aos="zoom-in-up"
            data-aos-duration="2000"
            width={600}
            height={100}
            src="/Images/hero.png"
            alt=""
            className="max-sm:w-full"
          />
        </div>
      </div>

      <Banner />
      <ChooseUs />
      <About />
      <Banner />
      <Footer />
    </>
  );
}
