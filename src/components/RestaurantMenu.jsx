import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantInfo from "./RestaurantInfo";
import MenuItemList from "./MenuItemList";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resInfo, menuItems] = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  return (
    <div className="flex  flex-col items-center">
      <RestaurantInfo resInfo={resInfo} />
      <div className="flex justify-center ">
        <div className=" w-[800px]">
          <div className="p-5">
            <h3 className="font-bold text-xl">Recommended</h3>
            <p className="text-md text-slate-400">{menuItems.length} ITEMS</p>
          </div>
          <div className="mt-2 text-sm">
            {menuItems.map((item) => (
              <MenuItemList key={item?.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
