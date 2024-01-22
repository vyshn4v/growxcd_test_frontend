import React, { Fragment } from "react";
import { Sidebar } from "flowbite-react";
import { HiShoppingBag } from "react-icons/hi";
import { CiViewList } from "react-icons/ci";
export const SidebarComponent: React.FC = () => {
  const options: Array<{
    icon: React.ReactElement;
    option: String;
  }> = [
    {
      icon: <HiShoppingBag style={{fontSize:"30px"}}/>,
      option: "Products",
    },
    {
      icon: <CiViewList style={{fontSize:"30px"}}/>,
      option: "Orders",
    },
  ];
  return (
    <Fragment>
      {options.map(({ icon, option }, index) => {
        return (
          <div
            key={index}
            className="w-100 hover:bg-slate-200 p-6 m-4 flex cursor-pointer transition-colors duration-1000 ease-in-out"
          >
            <div className="px-2">{icon}</div>
            <div className="px-2 text-lg">{option}</div>
          </div>
        );
      })}
    </Fragment>
  );
};
