import { useEffect, useRef, useState } from "react";
import { SidebarComponent } from "../component/SidebarComponent";
import { Header } from "../component/Header";
import { getAllOrders } from "../services/order";
import TableComponent from "../component/TableComponent";
import { TabItem } from "flowbite-react";
function Orders() {
  const sidebarRef: React.RefObject<HTMLDivElement> = useRef(null);
  const [orders, setOrders] = useState();
  const [data, setData] = useState();
  const handleSideBar = () => {
    if (sidebarRef.current?.style.left != "0px") {
      sidebarRef.current.style.left = "0px";
    } else {
      sidebarRef.current.style.left = "-1000px";
    }
  };
  useEffect(() => {
    getAllOrders()
      .then((response) => {
        setOrders(response.data);
      })
      .catch((err) => {});
  }, []);
  const handleSearch = (e) => {
    console.log(
      orders?.filter((item) => {
        if (item.product_name?.includes(e.target.value)) {
          return {
            product_name: item.product_name,
            quantity: item.quantity,
            discount: item.discount,
            Total: item.total_price,
          };
        }
      })
    );

    setData(
      orders
        ?.filter((item) => item.product_name?.includes(e.target.value))
        ?.map((item) => {
          return {
            product_name: item.product_name,
            quantity: item.quantity,
            discount: item.discount,
            Total: item.total_price,
          };
        })
    );
  };
  useEffect(() => {
    setData(
      orders?.map((order) => {
        return {
          product_name: order.product_name,
          quantity: order.quantity,
          discount: order.discount,
          Total: order.total_price,
        };
      })
    );
  }, [orders]);
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <SidebarComponent handleSideBar={handleSideBar} sidebarRef={sidebarRef} />
      <div className="w-full  h-screen bg-primary bg-gray-100 overflow-y-auto no-scrollbar ">
        <Header handleSideBar={handleSideBar} handleFormClick={handleSearch} />
        <div className="w-full  p-5 ">
          <h1 className="text-xl">Orders</h1>
        </div>
        <div className="w-full  mt-10 p-10">
          <TableComponent
            data={data}
            head={["Product Name", "Quantity", "Discount", "Total"]}
          />
        </div>
      </div>
    </div>
  );
}

export default Orders;
