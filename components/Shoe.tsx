import { IShoe } from "./data";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

interface ShoeProps {
  shoe: IShoe;
  popular?: boolean;
}

const Shoe: React.FC<ShoeProps> = ({
  shoe: { id, title, subtitle, rating, btnText, img, price, color, shadow },
  popular,
}) => {
  return (
    <div
      className={`border-red-1  ${
        popular ? "relative" : "flex flex-col items-center space-y-5"
      } rounded-3xl bg-gradient-to-b ${color} ${shadow} hover:scale-[1.03] transition-transform duration-300`}
    >
      <div
        className={`${
          popular
            ? "flex flex-col space-y-5 pl-5 pt-5 pb-5 xs-2:pl-7 xs-2:pt-7 xs-2:pb-7"
            : "flex flex-col space-y-5 items-center pt-5 xs-2:pt-7"
        } `}
      >
        <div className={`flex flex-col ${popular ? "" : "items-center"} `}>
          <span
            className={`text-[1.6rem] xs:text-[1.5rem] xs-2:text-[1.6rem] text-white font-medium leading-none`}
          >
            {title}
          </span>
          <span className="text-[1.4rem] xs:text-[1.3rem] xs-2:text-[1.4rem] text-white">
            {subtitle}
          </span>
        </div>
        <div className="flex space-x-5">
          <span className="bg-white px-1 rounded-lg text-[1.4rem] xs:text-[1.3rem] xs-2:text-[1.4rem] font-medium flex items-center">
            ${price}
          </span>
          <div className="flex items-center">
            <span className="inline-block w-[1.8rem] xs:w-[1.6rem] xs-2:w-[1.8rem] -mt-[3px]">
              <StarIcon className="text-white" />
            </span>
            <span className="text-[1.4rem] xs:text-[1.3rem] xs-2:text-[1.4rem] font-medium text-white">
              {rating}
            </span>
          </div>
        </div>
        <div className="flex space-x-5 xs:space-x-3">
          <button className="bg-white w-[2.6rem] xs:w-[2.2rem] xs-2:w-[2.6rem] p-1 rounded-md active:scale-90">
            <ShoppingBagIcon className="text-gray-700" />
          </button>
          <button className="bg-white text-[1.4rem] xs:text-[1.3rem] xs-2:text-[1.4rem] px-2 py-1 rounded-lg active:scale-90 transition-transform duration-150">
            {btnText}
          </button>
        </div>
      </div>
      <div
        className={`${
          popular
            ? "absolute right-0 top-1/2 -translate-y-1/2 w-[15rem] xs:w-[12rem] xs-2:w-[15rem] xs-4:w-[12rem] sm:w-[19rem]"
            : "pb-7 w-[20rem]"
        }`}
      >
        <img
          className={`${
            popular
              ? "-rotate-[35deg] hover:-rotate-[10deg]"
              : "hover:-rotate-[15deg]"
          } shoe`}
          src={img}
          alt={title}
        />
      </div>
    </div>
  );
};

export default Shoe;
