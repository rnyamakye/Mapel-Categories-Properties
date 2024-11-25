import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

export const NavButton = ({ to, className, children, onClick }) => {
  return (
    <Link to={to}>
      <button
        onClick={onClick}
        className={`${className} group border-[1px] -border--body w-fit py-3 px-6 bg-white text-black hover:bg-black text-[15px] hover:text-white transition-all duration-500 ease-out flex items-center font-medium`}
      >
        {children}
        <span className="">
          <HiArrowUpRight className="arrow-icon group-hover:translate-x-[2px] group-hover:-translate-y-[2px] text-[12px] font-medium" />
        </span>
      </button>
    </Link>
  );
};

export const DetailsButton = ({ to, className }) => {
  return (
    <Link to={to}>
      <button
        className={`${className} group border-[2px] -border--body w-fit py-2 px-5 bg-white text-black hover:bg-black text-[15px] hover:text-white transition-all duration-500 ease-out flex items-center gap-[10px]`}
      >
        Ask for Details{" "}
        <span className="">
          <HiArrowUpRight className="group-hover:translate-x-[1px] group-hover:-translate-y-[2px]" />
        </span>
      </button>
    </Link>
  );
};
