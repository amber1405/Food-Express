import { FaRegCaretSquareUp } from "react-icons/fa";
import { LuSquareDot } from "react-icons/lu";
import { PiShootingStarFill } from "react-icons/pi";
import { IMAGE_CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { FaMinus, FaPlus } from "react-icons/fa6";

const MenuItemList = ({ item }) => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  const product = items.find((prod) => prod.product.id === item.id);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div
      className="flex justify-between items-center border-b-2 pt-4 pb-0 gap-5 "
      key={item?.id}
    >
      <div className="flex flex-col self-start overflow-hidden h-auto gap-1 w-4/5">
        <h1 className="flex gap-1 items-center">
          {item?.isVeg ? (
            <LuSquareDot className="text-green-600 text-xl" />
          ) : (
            <FaRegCaretSquareUp className="text-red-600 text-lg" />
          )}
          {item?.isBestseller ? (
            <p className="flex items-center font-semibold text-base text-orange-500">
              <PiShootingStarFill />
              Bestseller
            </p>
          ) : (
            ""
          )}
        </h1>
        <h3 className="font-semibold text-xl text-slate-800">{item?.name}</h3>
        <p className="font-semibold text-base text-slate-700">
          {(item?.defaultPrice || item?.price) > 0
            ? new Intl.NumberFormat("en-IN", {
                style: "currency",
                currency: "INR",
              }).format((item?.price || item?.defaultPrice) / 100)
            : "Not Available "}
        </p>
        <p className="mt-3 text-base font-normal leading-5 text-slate-500">
          {item?.description}
        </p>
      </div>
      <div className="w-1/5 mb-8 text-center flex flex-col items-center">
        <div>
          {item?.imageId && (
            <img
              className="rounded-2xl relative w-40 h-44"
              src={IMAGE_CDN_URL + item?.imageId}
              alt={item?.name}
            />
          )}
        </div>
        <div>
          <div className="absolute -translate-x-1/2 -translate-y-4 font-bold px-1 text-lg flex justify-evenly text-green-600 border-2 rounded-xl mb-5 w-32 bg-white ">
            {product && product.product.id === item.id ? (
              <div className="flex justify-evenly">
                <button
                  className="text-red-500"
                  onClick={() => handleRemoveItem(item)}
                  id="decrement"
                >
                  <FaMinus />
                </button>
                <input
                  className="w-8 ml-5"
                  type="number"
                  id="input"
                  value={product.count}
                  readOnly
                />
                <button onClick={() => handleAddItem(item)} id="increment">
                  <FaPlus />
                </button>
              </div>
            ) : (
              <button className="w-32" onClick={() => handleAddItem(item)}>
                ADD
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemList;
