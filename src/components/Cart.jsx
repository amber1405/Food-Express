import React from "react";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-4 p-4">
      <div className="font-bold text-2xl">Cart</div>
      <div>
        
      </div>
    </div>
  );
};

export default Cart;
