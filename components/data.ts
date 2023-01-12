import { StaticImageData } from "next/image";
// import shoePopular1 from "../public/shoe-popular-1.png";
// import shoePopular2 from "../public/shoe-popular-2.png";
// import shoePopular3 from "../public/shoe-popular-3.png";

interface IShoe {
  id: string;
  title: string;
  subtitle: string;
  rating: string;
  btnText: string;
  img: string;
  price: number;
  color: string;
  shadow: string;
}

const popularShoes: IShoe[] = [
  {
    id: "0p0x1",
    title: "Nike Addapt BB 2.0",
    subtitle: "MEN Running Shoes",
    rating: "4.9",
    btnText: "Buy Now",
    img: "/shoe-popular-1.png",
    price: 200,
    color: "from-blue-600 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    id: "0p0x2",
    title: "Nike Martine Rose",
    subtitle: "MEN Running Shoes",
    rating: "4.5",
    btnText: "Buy Now",
    img: "/shoe-popular-2.png",
    price: 200,
    color: "from-red-500 to-rose-500",
    shadow: "shadow-lg shadow-rose-500",
  },
  {
    id: "0p0x3",
    title: "Nike Smart Shoe 2.0",
    subtitle: "MEN Running Shoes",
    rating: "5+",
    btnText: "Buy Now",
    img: "/shoe-popular-3.png",
    price: 200,
    color: "from-violet-500 to-indigo-500",
    shadow: "shadow-lg shadow-violet-500",
  },
];

export type { IShoe };
export { popularShoes };
