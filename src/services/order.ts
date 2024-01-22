import { server } from "../config/config.axios";
type order={
    product:number,
    quantity:number,
    total_price:number,
    discount:number
}
export const orderProduct = (order:order) => {
  return server.post("/user/order", {
    "orders":order
  });
};


export const getAllOrders=()=>{
  return server.get("/user/order")
}