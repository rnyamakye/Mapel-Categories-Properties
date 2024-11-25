import React, { useEffect } from "react";
import { CgArrowTopRight } from "react-icons/cg";
import HomeHeader from "../components/HomeHeader";
import Button from "../components/Button";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative h-[100vh]">
      <HomeHeader />
      <img
        src="https://cdn.prod.website-files.com/66eac2fd3c9f1f9db50ee072/6711fb56aec0b2a7f8069a92_hero.jpg"
        loading="lazy"
        alt="bg-pic"
        className="absolute top-0 right-0 left-0 h-full w-full -z-10 brightness-50"
      />

      <div className="text-discover text-white h-[90vh] flex flex-col items-center justify-center gap-10">
        <h2 className="text-6xl text-center font-serif">
          Discover wonderful homes <br /> that match your lifestyle
        </h2>

        <Button name="Explore Properties" color="white">
          <CgArrowTopRight size={20} />
        </Button>
      </div>
    </div>
  );
};

export default Home;
