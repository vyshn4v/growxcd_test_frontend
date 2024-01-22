import React, { Fragment } from "react";
import { BiSolidOffer } from "react-icons/bi";
import { BiSolidDiscount } from "react-icons/bi";
import { MdLocalOffer } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosCloseCircle } from "react-icons/io";
type Props={
    handleCartCard:React.MouseEventHandler<HTMLDivElement>
    cartRef:React.LegacyRef<HTMLDivElement>
}
function CartComponent({handleCartCard,cartRef,}:Props) {
  return (
    <Fragment>
      <div
        onClick={handleCartCard}
        className="absolute xl:hidden bottom-10 right-10"
      >
        <div className="bg-white p-5" style={{ borderRadius: "50%" }}>
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
        <div className="w-11/12  ">
          <div className="w-full pl-2 flex flex-col justify-center bg-gray-100 p-3">
            <span className="font-bold text-xl">Product name</span>
            {/* <span className="line-through font-bold text-gray-700  text-xl">
              $300
            </span> */}
            <span className="font-bold text-gray-700 text-base text-md">
              total : $400
            </span>
            <span className="font-bold text-gray-700 text-base text-md flex items-center gap-1">
              <BiSolidOffer /> 5% discount
            </span>
            <span className="font-bold text-gray-700 text-base text-md flex items-center gap-1">
              <BiSolidDiscount />
              flat 50
            </span>
            <span className="font-bold text-gray-700 text-base text-md flex items-center gap-1">
              <MdLocalOffer />
              ToothBrushfree
            </span>
            <span className="font-bold text-gray-700 text-base text-md flex items-center gap-1">
              quantity
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default CartComponent;
