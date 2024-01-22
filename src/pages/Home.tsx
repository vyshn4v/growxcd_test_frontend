import React, { useEffect, useRef, useState } from "react";
import { SidebarComponent } from "../component/SidebarComponent";
import { Header } from "../component/Header";
import { CardComponent } from "../component/CardComponent";
import CartComponent from "../component/CartComponent";
import { getProduct } from "../services/product";
import { orderProduct } from "../services/order";
import { toast } from "react-toastify";
type products = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  discount: number | null;
  image: string;
  createdAt: string;
  modifiedAt: string;
  discount_id: string;
  discount_type: string;
  discount_price: number;
  discount_percentage: number;
  freeproduct: string;
  freeproduct_id: string;
  freeproduct_name: string;
  freeproduct_quantity: number;
  freeproduct_price: number;
  freeproduct_discount: number;
  freeproduct_image: string;
  freeproduct_createdAt: string;
};
export type cart = products & {
  cart_quantity: number;
};
function Home() {
  const cartRef: React.RefObject<HTMLDivElement> = useRef(null);
  const [products, setProducts] = useState<Array<products>>([]);
  const [data, setData] = useState<Array<products>>();
  const [cart, setCart] = useState<Array<cart>>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [orderStatus, setOrderStatus] = useState<boolean>(false);
  const sidebarRef: React.RefObject<HTMLDivElement> = useRef(null);
  const toastId: any = useRef();

  useEffect(() => {
    getProduct()
      .then((res) => {
        setData(res.data);
        setProducts(res.data);
      })
      .catch(() => {
        toast.error("failed to load product");
      });
  }, []);

  const handleSideBar = () => {
    if (sidebarRef.current?.style.left != "0px") {
      sidebarRef.current.style.left = "0px";
    } else {
      sidebarRef.current.style.left = "-1000px";
    }
  };

  const handleCartCard = () => {
    if (cartRef.current?.style.left != "0px") {
      cartRef.current.style.left = "0px";
    } else {
      cartRef.current.style.left = "-1000px";
    }
  };
  const handleSearch = (e) => {
    setProducts(
      data?.filter((item) =>
        item.name?.toLowerCase()?.includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleCart = (id: number) => {
    const alreadyExist = cart.find((product: products) => product.id === id);
    if (alreadyExist) {
      toast.error("Item already selected");
      return false;
    }
    setCart((prev) => [
      ...prev,
      {
        ...products.find((product: products) => product.id === id),
        cart_quantity: 1,
      },
    ]);
  };

  const handleQuantity = (type: "decrement" | "increment", id: number) => {
    if (type == "decrement") {
      setCart((prev) =>
        prev.map((product) => {
          if (product.id == id) {
            return {
              ...product,
              cart_quantity: product.cart_quantity - 1,
            };
          }
          return product;
        })
      );
    } else {
      setCart((prev) =>
        prev.map((product) => {
          if (product.id == id) {
            return {
              ...product,
              cart_quantity: product.cart_quantity + 1,
            };
          }
          return product;
        })
      );
    }
  };

  const handleOrder = () => {
    if (!cart.length) {
      toast.error("Please select atleast one product");
      return false;
    }
    toastId.current = toast.loading("Proceeding...");
    let order = cart.map((product) => {
      return {
        product: product.id,
        quantity: product.cart_quantity,
        total_price: product.price * product.cart_quantity,
        discount: product.discount_price
          ? product.price - product.discount_price
          : product.price - (product.price / 100) * product.discount_percentage,
      };
    });
    orderProduct(order)
      .then((result) => {
        toast.update(toastId.current, {
          render: "Order successfully completed",
          type: "success",
          isLoading: false,
        });
      })
      .catch((error) => {
        toast.update(toastId.current, {
          render: "Failed to proceed order",
          type: "error",
          isLoading: false,
        });
      });
  };
  return (
    <div className="w-screen h-screen flex overflow-hidden">
      <SidebarComponent handleSideBar={handleSideBar} sidebarRef={sidebarRef} />
      <div className="w-full xl:w-9/12 h-screen bg-primary bg-gray-100 overflow-y-auto no-scrollbar">
        <Header handleSideBar={handleSideBar} handleFormClick={handleSearch} />
        <div className="w-full  pt-5 pl-5 ">
          <h1 className="text-xl">Products</h1>
        </div>
        <div className="w-full p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-10">
          {products.map((product, index) => {
            return (
              <CardComponent
                key={index}
                data={product}
                addToCart={handleCart}
              />
            );
          })}
        </div>
      </div>
      <CartComponent
        handleQuantity={handleQuantity}
        handleCartCard={handleCartCard}
        handleOrder={handleOrder}
        cartRef={cartRef}
        data={cart}
      />
    </div>
  );
}

export default Home;
