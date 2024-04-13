import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import {
  IMAGE_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  MENU_URL,
  RESTAURANT_TYPE_KEY,
} from "../utils/constants";
import { FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoBicycle } from "react-icons/io5";
import { FaRegCaretSquareUp } from "react-icons/fa";
import { LuSquareDot } from "react-icons/lu";
import { PiShootingStarFill } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
useParams;

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    // setResInfo(json.data);
    const restaurantData =
      json?.data?.cards
        ?.map((x) => x.card)
        ?.find((x) => x && x.card["@type"] === RESTAURANT_TYPE_KEY)?.card
        ?.info || null;
    setResInfo(restaurantData);

    const menuItemsData =
      json?.data?.cards
        .find((x) => x.groupedCard)
        ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((x) => x.card?.card)
        ?.filter((x) => x["@type"] == MENU_ITEM_TYPE_KEY)
        ?.map((x) => x.itemCards)
        .flat()
        .map((x) => x.card?.info) || [];

    const uniqueMenuItems = [];
    menuItemsData.forEach((item) => {
      if (!uniqueMenuItems.find((x) => x.id === item.id)) {
        uniqueMenuItems.push(item);
      }
    });
    setMenuItems(uniqueMenuItems);
  };
  if (resInfo === null) return <Shimmer />;
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  const {
    name,
    cuisines,
    areaName,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
  } = resInfo;
  const { slaString, lastMileTravelString } = resInfo.sla;

  return (
    <div className="flex  flex-col items-center">
      <div className="m-5">
        <div className="w-[750px] px-8 rounded-3xl shadow-2xl  py-4 flex flex-col justify-between border m-5 mt-0 cursor-pointer hover:scale-95 transition-all ease-in-out duration-300">
          <h2 className="font-bold my-2 text-4xl pt-2 ">{name}</h2>
          <h5 className=" text-slate-500">{cuisines.join(", ")}</h5>
          <div className="flex items-center gap-2">
            <h2 className="font-medium">Outlet :</h2>
            <h6 className=" text-slate-500">{areaName}</h6>
          </div>
          <span className="flex my-3 gap-4 text-center font-semibold text-slate-700">
            <h4 className="flex items-center gap-2 w-14 ">
              <FaStar className="w-5 h-5 bg-[#00ad1d] text-white rounded-full p-1" />
              {avgRating}
            </h4>
            <p className="-ml-4">({totalRatingsString})</p>

            <p className="text-slate-600 flex items-center text-sm">
              <GoDotFill />
            </p>
            <h4>{costForTwoMessage}</h4>
            <p className="text-slate-600 flex items-center text-sm">
              <GoDotFill />
            </p>
            <div className="flex items-center gap-4">
              {slaString} | <IoBicycle className="text-xl -mx-2 " />
              {lastMileTravelString}{" "}
            </div>
          </span>
        </div>
      </div>
      <div className="flex justify-center ">
        <div className=" w-[800px]">
          <div className="p-5">
            <h3 className="font-bold text-xl">Recommended</h3>
            <p className="text-md text-slate-400">{menuItems.length} ITEMS</p>
          </div>
          <div className="mt-2 text-sm">
            {menuItems.map((item) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
