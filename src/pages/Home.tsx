import React, { useEffect, useRef, useState } from "react";
import { SidebarComponent } from "../component/SidebarComponent";
import { IoIosCloseCircle } from "react-icons/io";
import { Header } from "../component/Header";
import { CardComponent } from "../component/CardComponent";
import CartComponent from "../component/CartComponent";
import { getProduct } from "../services/product";
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
  const sidebarRef: React.RefObject<HTMLDivElement> = useRef(null);
  const cartRef: React.RefObject<HTMLDivElement> = useRef(null);
  const [products, setProducts] = useState<Array<products>>([]);
  const [cart, setCart] = useState<Array<cart>>([]);
  useEffect(() => {
    getProduct()
      .then((res) => {
        console.log(res.data);

        setProducts(res.data);
      })
      .then(() => {});
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
  const handleSearch = () => {

  };

  const handleCart = (id: number) => {
    const alreadyExist = cart.find((product: products) => product.id === id);
    if (alreadyExist) {
      console.log(alreadyExist);
      console.log(false);
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
    if(type == "decrement"){
      setCart(prev=>prev.map(product => {
        if(product.id == id){
          return {
            ...product,
            cart_quantity: product.cart_quantity - 1
          }
        }
        return product
      }))
    }else{
      setCart(prev=>prev.map(product => {
        if(product.id == id){
          return {
            ...product,
            cart_quantity: product.cart_quantity + 1
          }
        }
        return product
      }))
    }
  };

  return (
    <div className="w-screen h-screen flex overflow-hidden">
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
        <SidebarComponent />
      </div>
      <div className="w-full xl:w-9/12 h-screen bg-primary bg-gray-100 overflow-y-auto no-scrollbar">
        <Header handleSideBar={handleSideBar} handleFormClick={handleSearch} />
        <div className="w-full  pt-5 pl-5 ">
          <h1 className="text-xl">Products</h1>
        </div>
        <div className="w-full md:w-full p-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mt-10">
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
        cartRef={cartRef}
        data={cart}
      />
    </div>
  );
}

export default Home;
