import { IMAGE_URL } from "../utils/constants";
import { FaStar } from "react-icons/fa";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, areaName } =
    resData.info;

  return (
    <div className="w-64 h-[340px] rounded-lg flex flex-col leading-5 justify-between p-2 m-5 mt-0 cursor-pointer hover:scale-95 transition-all ease-in-out duration-300">
      <img
        src={IMAGE_URL + cloudinaryImageId}
        className="w-60 h-44 rounded-xl shadow-lg shadow-slate-300"
      />
      <h2 className="font-bold pt-2 ">{name}</h2>
      <h5 className="font-light text-slate-500">{cuisines.join(", ")}</h5>
      <h6 className="font-light text-slate-500">{areaName}</h6>
      <span className="flex justify-between mt-2 text-center font-semibold">
        <h4 className="flex items-center gap-1 w-14 ">
          <FaStar className="w-5 h-5 bg-[#00ad1d] text-white rounded-full p-1" />
          {avgRating}
        </h4>
        <h4>{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
