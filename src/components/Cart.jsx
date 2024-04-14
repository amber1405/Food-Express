import { useDispatch, useSelector } from "react-redux";
import MenuItemList from "./MenuItemList";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "../assets/Empty_Cart.jpg";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="flex flex-col items-center m-4 p-4">
      
      <div className="w-3/4 ">
        {cartItems?.length === 0 && (
          <div className="flex flex-col items-center gap-3">
            <img className="h-80 w-1/2" src={EmptyCart} alt="" />
            <h1 className="font-bold text-lg"> Cart is empty.</h1>
            <p className="font-semibold text-slate-500">You can go to home page to view more restaurants</p>
            <Link to="/">
              <button className="border shadow-md bg-orange-400 text-white font-semibold text-lg p-2 px-3 m-2 rounded-xl font-mono">See Restaurants near you</button>
            </Link>
          </div>
        )}
        {cartItems?.map((item) => (
          <MenuItemList key={item.product.id} item={item.product} />
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
