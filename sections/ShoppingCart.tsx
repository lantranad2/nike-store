import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import ShoppingEmpty from "../components/ShoppingEmpty";
import ShoppingList from "../components/ShoppingList";

const ShoppingCart = () => {
  return (
    <aside className="fixed top-0 left-0 w-full h-screen z-40 bg-white/50 backdrop-blur-[7px] flex justify-end">
      <div className="w-full sm:w-[50rem] h-full bg-white/60 flex flex-col">
        <div className="bg-white flex justify-between items-center px-[1.6rem] py-3">
          <div className="flex items-center space-x-1 font-medium">
            <ChevronDoubleLeftIcon className="text-gray-700 stroke-gray-600 hover:text-orange-500 hover:stroke-orange-500 w-8 mr-5 cursor-pointer transition-all duration-200" />
            <span>Your Cart</span>
            <span className="bg-gray-700 text-white px-2 py-1 rounded-md">
              (0 Items)
            </span>
          </div>
          <button className="bg-gray-700 p-1 rounded-md group">
            <XMarkIcon className="w-8 text-white stroke-white group-hover:text-orange-500 group-hover:stroke-orange-500 " />
          </button>
        </div>
        {/* <ShoppingEmpty /> */}
        <ShoppingList />
      </div>
    </aside>
  );
};

export default ShoppingCart;
