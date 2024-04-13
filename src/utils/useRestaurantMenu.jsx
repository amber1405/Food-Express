import { useEffect, useState } from "react";
import { MENU_ITEM_TYPE_KEY, MENU_URL, RESTAURANT_TYPE_KEY } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
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

  return [resInfo,menuItems];
};

export default useRestaurantMenu;
