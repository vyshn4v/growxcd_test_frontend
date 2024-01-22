import React, { Fragment } from "react";

import { CiShoppingCart } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
import { cart } from "../pages/Home";
import { CartCardComponent } from "./CartCardComponent";
type Props = {
  handleCartCard: React.MouseEventHandler<HTMLDivElement>;
  handleQuantity: React.MouseEventHandler<HTMLDivElement>;
  cartRef: React.LegacyRef<HTMLDivElement>;
  data: Array<cart>;
};
function CartComponent({ handleCartCard, cartRef, data,handleQuantity }: Props) {
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
        className=" w-11/12 md:w-6/12 xl:w-1/4 h-screen bg-white flex flex-col items-center absolute xl:static"
        ref={cartRef}
        style={{ left: "-1000px", transition: "all 1s", zIndex: 999 }}
      >
        <div className="w-11/12 hover:bg-slate-200 p-6 m-4 flex cursor-pointer transition-colors duration-1000 ease-in-out">
          <div className="w-11/12">Selected Products</div>
          <div onClick={handleCartCard}>
            <IoIosCloseCircle style={{ fontSize: "30px" }} />
          </div>
        </div>
        {data?.map((carItem: cart,index:number) => {
          return <CartCardComponent key={index} handleQuantity={handleQuantity} data={carItem} />;
        })}
      </div>
    </Fragment>
  );
}

export default CartComponent;
