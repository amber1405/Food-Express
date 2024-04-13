import { FaRegCaretSquareUp } from "react-icons/fa";
import { LuSquareDot } from "react-icons/lu";
import { PiShootingStarFill } from "react-icons/pi";
import { IMAGE_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const MenuItemList = ({item}) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div
    className="flex justify-between items-center border-b-2 pt-4 pb-0 gap-5 "
    key={item?.id}
  >
    <div className="flex flex-col self-start overflow-hidden h-auto gap-1">
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
      <h3 className="font-semibold text-xl text-slate-800">
        {item?.name}
      </h3>
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
    <div className="w-32 text-center">
      {item?.imageId && (
        <img
          className="rounded-2xl"
          src={IMAGE_CDN_URL + item?.imageId}
          alt={item?.name}
        />
      )}
      <button
        className="font-bold text-green-600 shadow-sm rounded-xl bg-white border-2 mb-5 border-slate-300 w-32 p-1"
        onClick={() => handleAddItem(item)}
      >
        ADD +
      </button>
    </div>
  </div>
  );
};

export default MenuItemList;
