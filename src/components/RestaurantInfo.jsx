import { FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoBicycle } from "react-icons/io5";

const RestaurantInfo = ({ resInfo }) => {
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
  );
};

export default RestaurantInfo;
