import React from "react";
import { cart } from "../pages/Home";
import { BiSolidOffer } from "react-icons/bi";
import { BiSolidDiscount } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
type props = {
  data: cart;
  handleQuantity:React.MouseEventHandler<HTMLDivElement>
};
export const CartCardComponent = ({ data,handleQuantity }: props) => {
  const {
    id,
    cart_quantity,
    name,
    price,
    discount_percentage,
    discount_price,
    freeproduct_name,
  } = data;
  return (
    <div className="w-11/12 flex bg-gray-100  p-3 mt-2">
      <div className="w-full pl-2 flex flex-col justify-center ">
        <span className="font-bold text-xl">{name}</span>
        {/* <span className="line-through font-bold text-gray-700  text-xl">
              $300
            </span> */}
        <span className="font-bold text-gray-700 text-lg">
          total : {price * cart_quantity}
        </span>
        {(discount_percentage || discount_price) && (
          <span className="font-bold text-gray-700 text-lg flex items-center gap-1">
            Discount price :{" "}
            {discount_price
              ? price - discount_price
              : price - (price / 100) * discount_percentage}
          </span>
        )}
        {discount_price && (
          <span className="font-bold text-gray-700 text-lg flex items-center gap-1">
            <BiSolidDiscount />
            flat 50
          </span>
        )}
        {freeproduct_name && (
          <span className="font-bold text-gray-700 text-lg flex items-center gap-1">
            <MdLocalOffer />
            {freeproduct_name} free
          </span>
        )}
      </div>
      <span className="font-bold text-gray-700 text-md flex items-center gap-1">
        <button className=" bg-orange-400 p-2 text-white font-bold" onClick={()=>handleQuantity("decrement",id)}>-</button>
        <span className="m-2">
       {cart_quantity}
        </span>
        <button className=" bg-orange-400 p-2 text-white font-bold" onClick={()=>handleQuantity("increment",id)}>+</button>
      </span>
    </div>
  );
};
