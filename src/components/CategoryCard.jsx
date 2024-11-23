import { Link } from "react-router-dom";

export const CategoryCard = ({ categoryName, src, description, category }) => {
  return (
    <div className="group relative w-full h-full cursor-pointer overflow-hidden transition-opacity hover:opacity-100 md:min-w-[100px] md:max-w-[400px] md:h-[400px] ">
      <Link to={`/categories/${category}`}>
        {" "}
        {/* Updated link to match new routing */}
        <img
          src={src}
          alt={categoryName}
          className="object-cover w-full h-[230px] md:h-full transform transition duration-500 group-hover:scale-[1.05]"
        />
        <div className="py-[15px] px-[10px] bg-white relative md:absolute bottom-0 w-full space-y-1 border">
          <p className="font-medium text-[18px]">{categoryName}</p>
          <p className="text-[14px] opacity-80">{description}</p>
        </div>
      </Link>
    </div>
  );
};
