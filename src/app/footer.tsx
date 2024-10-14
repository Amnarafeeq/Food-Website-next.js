import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="bg-pink-600 text-white text-lg h-[75vh] rounded-t-3xl max-sm:h-auto"
    >
      <h1 className="py-8 tracking-wider text-3xl font-semibold text-center">
        Contact Us
      </h1>
      <div className="flex justify-evenly flex-wrap mt-10 ">
        <div className="flex flex-col justify-center  items-center ">
          <FaLocationDot className="text-5xl" />
          <p className="mt-8">
            #12, 4th Avenue, Model Town, <br />
            Faisalabad, Punjab 38000, Pakistan
          </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FaEnvelope className="text-5xl" />
          <p className="mt-8">info@goodfood.com </p>
          <p> hr@goodfood.com</p>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <FaPhoneAlt className="text-5xl" />
          <p className="mt-8">+92 9643224232 - Sales and Services</p>
          <p>+92 9623423436 - Hiring Queries</p>
          <p>+92 2345232445 - Whatsapp</p>
        </div>
      </div>
      <div>
        <hr className="h-1 bg-white m-10" />
        <div className="flex justify-between mx-14">
          <div>
            <p> © 2022 TCJ. All rights reserved</p>
          </div>
          <div className="flex gap-5">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
