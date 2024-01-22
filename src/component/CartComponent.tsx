import React, { Fragment } from "react";

import { CiShoppingCart } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { cart } from "../pages/Home";
import { CartCardComponent } from "./CartCardComponent";
type Props = {
  handleCartCard: React.MouseEventHandler<HTMLDivElement>;
  handleQuantity: React.MouseEventHandler<HTMLDivElement>;
  handleOrder: React.MouseEventHandler<HTMLDivElement>;
  cartRef: React.LegacyRef<HTMLDivElement>;
  data: Array<cart>;
};
function CartComponent({
  handleCartCard,
  cartRef,
  data,
  handleQuantity,
  handleOrder,
}: Props) {
  let total = 0;
  data.forEach(
    (product: cart) => (total += product.price * product.cart_quantity)
  );
  return (
    <Fragment>
      <div
        onClick={handleCartCard}
        className="absolute xl:hidden bottom-10 right-10 "
      >
        <div className="bg-white p-5 shadow-xl" style={{ borderRadius: "50%" }}>
          <CiShoppingCart style={{ fontSize: "40px" }} />
        </div>
      </div>
      <div
        className=" w-11/12  md:w-6/12 xl:w-1/4 h-screen bg-white flex flex-col items-center absolute xl:static"
        ref={cartRef}
        style={{ left: "-1000px", transition: "all 1s", zIndex: 999 }}
      >
        <div className="w-11/12  bg-white hover:bg-slate-200 p-6 flex cursor-pointer transition-colors duration-1000 ease-in-out">
          <div className="w-11/12">Selected Products</div>
          <div className="visible xl:invisible" onClick={handleCartCard}>
            <IoIosCloseCircle style={{ fontSize: "30px" }} />
          </div>
        </div>
        <div className="w-full h-screen no-scrollbar flex flex-col items-center overflow-scroll">
          {data?.map((carItem: cart, index: number) => {
            return (
              <CartCardComponent
                key={index}
                handleQuantity={handleQuantity}
                data={carItem}
              />
            );
          })}
        </div>
        <div className="w-11/12  absolute bg-white bottom-0 lg:static lg:w-full hover:bg-slate-200 p-6 flex cursor-pointer transition-colors duration-1000 ease-in-out flex items-center">
          <div className="w-6/12">Total : {total}</div>
          <div className="w-6/12">
            <button
              className="w-full bg-orange-400 p-2 text-white font-bold"
              onClick={handleOrder}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CartComponent;
