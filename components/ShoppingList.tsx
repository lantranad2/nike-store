import ShoppingItem from "./ShoppingItem";
// import { topRatedShoes as shoes } from "./data";
import { useAppSelector } from "../state/hooks";
import { cartItems } from "../state/cartSlice";
import { RootState } from "../state/store";

const ShoppingList = () => {
  const shoes = useAppSelector(cartItems);

  return (
    <div className="border-red-1 flex-1 h-[90vh] p-[1.6rem] flex flex-col space-y-5">
      <div className="border-red-1 overflow-y-auto space-y-14 shopping-items">
        {shoes.map((s) => (
          <ShoppingItem key={s.id} data={s} quantity={s.quantity} />
        ))}
      </div>
      <div className="border-red-1 flex flex-col space-y-2">
        <div className="flex justify-between">
          <span className="font-semibold">SUBTOTAL</span>
          <span className="bg-gray-700 text-white px-2 rounded-md">
            ${shoes.reduce((total, s) => total + s.price * s.quantity, 0)}
          </span>
        </div>
        <span className="text-[1.4rem]">
          Taxes and shipping will calculated at shipping
        </span>
        <button className="bg-gray-700 text-white py-1 rounded-md btn-effect">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default ShoppingList;
