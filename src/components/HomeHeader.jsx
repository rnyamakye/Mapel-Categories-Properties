import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "./Button";
import { CgArrowTopRight } from "react-icons/cg";

const HomeHeader = () => {
  return (
    <header className="flex px-[5%] py-5 justify-evenly text-white">
      <img
        src="https://cdn.prod.website-files.com/66eac2fd3c9f1f9db50ee072/67122513baf92e3ed5a3886d_brand.svg"
        loading="lazy"
        alt="logo"
      />
      <nav className="space-x-5 font-semibold">
        <Link to="/about">About us</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/services">Services</Link>
        <Link to="/blogs">Blogs</Link>
      </nav>
      <div className="search-contact flex items-center gap-10 text-black">
        <FiSearch size={25} />
        <Button name="Contact us" color="white" >
          <CgArrowTopRight size={20} color="black" className="hover:text-white" />
        </Button>
      </div>
    </header>
  );
};

export default HomeHeader;
