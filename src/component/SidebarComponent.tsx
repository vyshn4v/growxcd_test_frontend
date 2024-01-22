import React, { Fragment } from "react";
import { Sidebar } from "flowbite-react";
import { HiShoppingBag } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import { CiViewList } from "react-icons/ci";
import { Link } from "react-router-dom";
type props = {
  handleSideBar: React.MouseEventHandler<HTMLDivElement>;
  sidebarRef: React.RefObject<HTMLDivElement>;
};
export const SidebarComponent = ({ sidebarRef, handleSideBar }: props) => {
  const options: Array<{
    icon: React.ReactElement;
    option: String;
    path: string;
  }> = [
    {
      icon: <HiShoppingBag style={{ fontSize: "30px" }} />,
      option: "Products",
      path: "/",
    },
    {
      icon: <CiViewList style={{ fontSize: "30px" }} />,
      option: "Orders",
      path: "/orders",
    },
  ];

  return (
    <div
      ref={sidebarRef}
      className="md:w-1/4 w-screen   h-screen absolute bg-white"
      style={{ left: "-1000px", transition: "all 1s", zIndex: 999 }}
    >
      <div className="w-100 hover:bg-slate-200 p-6 m-4 flex cursor-pointer transition-colors duration-1000 ease-in-out">
        <div className="w-11/12">Options</div>
        <div onClick={handleSideBar}>
          <IoIosCloseCircle style={{ fontSize: "30px" }} />
        </div>
      </div>
      {options.map(({ icon, option, path }, index) => {
        return (
          <Link to={path}>
            <div
              key={index}
              className="w-100 hover:bg-slate-200 p-6 m-4 flex cursor-pointer transition-colors duration-1000 ease-in-out"
            >
              <div className="px-2">{icon}</div>
              <div className="px-2 text-lg">{option}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
