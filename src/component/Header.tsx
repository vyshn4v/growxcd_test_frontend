import React, {  Fragment } from "react";
import { CgDetailsMore } from "react-icons/cg";
type Props={
    handleFormClick:React.ChangeEventHandler<HTMLInputElement>,
    handleSideBar:React.MouseEventHandler<HTMLButtonElement>
}
export const Header = ({handleFormClick,handleSideBar}:Props) => {
  return (
    <Fragment>
      <div className="w-full  flex items-center sticky top-0 bg-white">
        <div className="w-6/12 p-5">
          <button onClick={handleSideBar}>
            <CgDetailsMore style={{ fontSize: "30px" }} />
          </button>
        </div>
        <div className="w-6/12">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            onChange={handleFormClick}
            placeholder="Enter the product name"
          />
        </div>
      </div>
    </Fragment>
  );
};
