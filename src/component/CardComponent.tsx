import { BiSolidOffer } from "react-icons/bi";
import { BiSolidDiscount } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
export const CardComponent = ({ data,addToCart }) => {
  const {
    id,
    name,
    price,
    discount_price,
    discount_percentage,
    image,
    freeproduct_name,
  } = data;

  return (
    <div className="w-full  shadow-lg p-3 flex">
      <div className="h-48 w-6/12 lg:w-38 flex justify-center">
        <img src={image} className="object-fill w-38 h-full" alt="" />
      </div>
      <div className="w-6/12 lg:w-7/12 pl-2 flex flex-col justify-center">
        <span className="font-bold text-xl">{name}</span>
        <span
          className={`${
            (discount_price || discount_percentage) && "line-through"
          } font-bold text-gray-700  text-xl`}
        >
          {price}
        </span>
        {(discount_price || discount_percentage) && (
          <span className="font-bold text-gray-700  text-md">
            {discount_price
              ? price - discount_price
              : price - ((price / 100)*discount_percentage)}
          </span>
        )}
        {discount_percentage && (
          <span className="font-bold text-gray-700  text-md flex items-center gap-1">
            <BiSolidOffer /> {discount_percentage}% discount
          </span>
        )}
        {discount_price && (
          <span className="font-bold text-gray-700  text-md flex items-center gap-1">
            <BiSolidDiscount />
            flat {discount_price}
          </span>
        )}
        {freeproduct_name && (
          <span className="font-bold text-gray-700  text-md flex items-center gap-1">
            <MdLocalOffer />
            {freeproduct_name} free
          </span>
        )}
        <button onClick={()=>addToCart(id)}className="w-full bg-orange-400 p-2 text-white font-bold">
          Add
        </button>
      </div>
    </div>
  );
};
