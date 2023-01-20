import emptyBag from "../public/emptybag.png";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useAppDispatch } from "../state/hooks";
import { closeCart } from "../state/cartSlice";

const ShoppingEmpty = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex flex-col justify-end items-center space-y-10 flex-1 pb-[10rem] border-red-1">
      <img
        className="w-[15rem] hover:scale-110 transition-transform duration-300"
        src={emptyBag.src}
        alt="Empty Bag"
      />
      <button
        className="bg-gradient-to-b from-orange-500 to-orange-400 flex items-center space-x-4 px-5 py-1 rounded-md btn-effect"
        onClick={() => dispatch(closeCart())}
      >
        <ArrowLeftIcon className="w-6 stroke-gray-600" />
        <span className="font-medium">Back To Nike Store</span>
      </button>
    </div>
  );
};

export default ShoppingEmpty;
