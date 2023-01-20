"use client";

import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { cartItems, loadCart, openCart } from "../state/cartSlice";
import { useAppDispatch, useAppSelector } from "../state/hooks";

interface NavbarProps {
  visible: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ visible }) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(cartItems);

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  return (
    <nav
      className={`border-teal-1 fixed left-0 top-0 right-0 z-20 transition-[background] duration-150 ${
        visible ? "bg-white/70 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="border-red-1 boundary flex justify-between items-center py-10 pr-[2.475rem]">
        <a className="w-28 inline-block" href="/">
          <img
            className={`${visible && "brightness-[0.25]"}`}
            src="/logo.png"
            alt="Nike Logo"
          />
        </a>
        <div className="flex items-center space-x-4">
          <MagnifyingGlassIcon
            className={`w-9 cursor-pointer ${!visible && "text-white"}`}
          />
          <HeartIcon
            className={`w-9 cursor-pointer ${!visible && "text-white"}`}
          />
          <div
            className="relative cursor-pointer icon-effect"
            onClick={() => dispatch(openCart())}
          >
            <ShoppingBagIcon className={`w-9 ${!visible && "text-white"}`} />
            <span
              className={`absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-7 h-7 rounded-full text-[1.2rem] leading-none flex justify-center items-center shadow-sm ${
                visible
                  ? "bg-gray-600 shadow-gray-600 text-white"
                  : "bg-white shadow-white"
              }`}
            >
              {items.reduce((quantity, item) => quantity + item.quantity, 0)}
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
