import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch=useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col items-center m-4 p-4">
      <div className="text-center font-bold text-2xl">Cart</div>
      <div className="w-3/4">
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
        {cartItems?.map((item, index) => (
          <MenuItemList key={index} item={item} />
        ))}
      </div>
      <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
    </div>
  );
};

export default Cart;
