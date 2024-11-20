import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
import Button from "./Button";
import { CgArrowTopRight } from "react-icons/cg";

const MainHeader = () => {
  return (
    <header className="flex px-[5%] py-5 justify-evenly border border-b items-center">
      <Link to={`/`}>
        <img
          src="https://cdn.prod.website-files.com/66eac2fd3c9f1f9db50ee072/670d0149580d96c4ff34fc75_mapel.svg"
          loading="lazy"
          alt="logo"
        />
      </Link>

      <nav className="space-x-5 font-semibold text-gray-700">
        <Link to={`/about`}>About us</Link>
        <Link to={`/properties`}>Properties</Link>
        <Link to={`/categories`}>Categories</Link>
        <Link to={`/services`}>Services</Link>
        <Link to={`/blogs`}>Blogs</Link>
      </nav>
      <div className="search-contact flex items-center gap-10 text-black">
        <FiSearch size={25} />
        <Button name="Contact us" >
          <CgArrowTopRight
            size={20}
            color="black"
            className="hover:text-white"
          />
        </Button>
      </div>
    </header>
  );
};

export default MainHeader;
