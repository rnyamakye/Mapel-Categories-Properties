import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { HiArrowUpLeft } from "react-icons/hi2";

export const NextButton = ({ to, className }) => {
  return (
    <Link to={to}>
      <button
        className={`${className} group border-[2px] -border--body w-fit py-2 px-5 bg-white text-black hover:bg-black text-[15px] hover:text-white transition-all duration-500 ease-out flex items-center gap-[10px]`}
      >
        Next{" "}
        <span className="">
          <HiArrowUpRight className="group-hover:translate-x-[1px] group-hover:-translate-y-[2px]" />
        </span>
      </button>
    </Link>
  );
};
export const PreviousButton = ({ to, className }) => {
  return (
    <Link to={to}>
      <button
        className={`${className} group border-[2px] -border--body w-fit py-2 px-5 bg-white text-black hover:bg-black hover:text-white transition-all duration-500 ease-out flex items-center gap-[10px] text-[15px]`}
      >
        <span className="">
          <HiArrowUpLeft className="group-hover:-translate-x-[1px] group-hover:-translate-y-[2px]" />
        </span>{" "}
        Previous
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
