import { IShoe } from "./data";
import { TrashIcon } from "@heroicons/react/24/outline";

interface ShoppingItemProps {
  data: IShoe;
}

const ShoppingItem: React.FC<ShoppingItemProps> = ({
  data: { id, title, subtitle, rating, btnText, img, price, color, shadow },
}) => {
  return (
    <div className="flex">
      <div
        className={`flex justify-center items-end relative p-3 w-[12rem] xs-2:w-[10rem] xs-3:w-[8rem] xs-4:w-[7rem] rounded-md bg-gradient-to-b ${color} ${shadow}`}
      >
        <img className="w-4/5" src={img} alt={title} />
        <span className="absolute top-2 right-2 bg-white/70 text-[1.2rem] px-2 rounded-md">
          ${price}
        </span>
      </div>
      <div className="flex flex-col ml-5 xs-4:ml-3">
        <span className="text-[1.6rem] xs-2:text-[1.4rem] xs-4:text-[1.2rem] font-semibold leading-none">
          {title}
        </span>
        <span className="text-[1.4rem] xs-2:text-[1.2rem] xs-4:text-[1.1rem]">
          {subtitle}
        </span>
        <div className="flex space-x-5 mx-auto mt-2">
          <button className="bg-gray-700 w-[2.5rem] h-[2.5rem] xs-2:w-[2rem] xs-2:h-[2rem] text-white text-[2rem] font-medium flex justify-center items-center rounded-md btn-effect leading-none">
            -
          </button>
          <span className="h-[2.5rem] xs-2:h-[2rem] bg-gray-700 text-white font-medium flex justify-center items-center rounded-md px-5 xs-2:text-[1.4rem] leading-none">
            1
          </span>
          <button className="bg-gray-700 w-[2.5rem] h-[2.5rem] xs-2:w-[2rem] xs-2:h-[2rem] text-white text-[2rem] font-medium flex justify-center items-center rounded-md btn-effect leading-none">
            +
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between items-center ml-auto">
        <span className="text-[1.6rem] xs-2:text-[1.4rem] xs-4:text-[1.2rem] font-medium leading-none">
          ${price}
        </span>
        <button className="bg-gray-700 text-white flex justify-center items-center rounded-md w-[2.5rem] h-[2.5rem] xs-2:w-[2rem] xs-2:h-[2rem] p-1 btn-effect">
          <TrashIcon />
        </button>
      </div>
    </div>
  );
};

export default ShoppingItem;
