import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header
      data-aos="fade"
      className=" flex justify-between p-4 max-sm:flex-col max-sm:items-center"
    >
      <div>
        <h2 className="text-3xl text-pink-600 font-bold cursor-pointer font-my_font">
          HealthyHarvest
        </h2>
      </div>
      <div>
        <nav>
          <ul className="flex items-center gap-x-5 mx-6 font-semibold text-pink-400 text-xl">
            <li className="hover:underline">
              <Link href="#">Home</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">About</Link>
            </li>
            <li className="hover:underline">
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
