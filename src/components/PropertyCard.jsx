import { Link } from "react-router-dom";

export const PropertyCard = ({
  src,
  location,
  price,
  name,
  availability,
  id,
  to,
}) => {
  return (
    <div className="group relative w-[100%] h-[100%] cursor-pointer overflow-hidden transition-opacity hover:opacity-100 md:min-w-[100px] md:max-w-[400px]">
      <Link to={to}>
        <img
          src={src}
          alt={name}
          className="object-cover w-full h-[100%] md:h-full transform transition duration-500 group-hover:scale-[1.05] cursor-zoom-in"
        />
        <div className="absolute top-3 right-3 bg-white w-fit px-2 py-1 text-[14px]">
          {availability}
        </div>
        <div className="p-[10px] bg-white absolute bottom-3 left-2 w-[95%] space-y-2">
          <p className="font-medium text-[15px] ">{name}</p>
          <table className="opacity-80 w-[100%] space-y-1 text-[14px]">
            <tr className="border-b-[1px] flex gap-2">
              <td>Location: </td>
              <td>{location}</td>
            </tr>
            <tr className="flex gap-8">
              <td>Price:</td>
              <td>{price}</td>
            </tr>
          </table>
        </div>
      </Link>
    </div>
  );
};
