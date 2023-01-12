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

const topRatedShoes: IShoe[] = [
  {
    id: "0M0x1",
    title: "Nike Air Low Premium",
    subtitle: "MEN Running Shoes",
    rating: "5+",
    btnText: "Buy Now",
    img: "/top-rated-1.png",
    price: 150,
    color: "from-sky-600 to-indigo-600",
    shadow: "shadow-lg shadow-blue-500",
  },
  {
    id: "0M0x2",
    title: "Nike Air Force Green",
    subtitle: "MEN Running Shoes",
    rating: "5+",
    btnText: "Buy Now",
    img: "/top-rated-2.png",
    price: 150,
    color: "from-green-500 to-emerald-500",
    shadow: "shadow-lg shadow-green-500",
  },
  {
    id: "0M0x3",
    title: "Nike Addapt BB Rose",
    subtitle: "MEN Running Shoes",
    rating: "5+",
    btnText: "Buy Now",
    img: "/top-rated-3.png",
    price: 150,
    color: "from-red-500 to-rose-500",
    shadow: "shadow-lg shadow-rose-500",
  },
  {
    id: "0M0x4",
    title: "Nike Air Premium",
    subtitle: "MEN Running Shoes",
    rating: "5+",
    btnText: "Buy Now",
    img: "/top-rated-4.png",
    price: 150,
    color: "from-orange-500 to-amber-500",
    shadow: "shadow-lg shadow-orange-500",
  },
  {
    id: "0M0x5",
    title: "Nike Adapt BB Pro",
    subtitle: "MEN Running Shoes",
    rating: "5+",
    btnText: "Buy Now",
    img: "/top-rated-5.png",
    price: 150,
    color: "from-gray-900 to-yellow-500",
    shadow: "shadow-lg shadow-yellow-500",
  },
  {
    id: "0M0x6",
    title: "Air Jordan PR3",
    subtitle: "MEN Running Shoes",
    rating: "5+",
    btnText: "Buy Now",
    img: "/top-rated-6.png",
    price: 150,
    color: "from-blue-500 to-cyan-500",
    shadow: "shadow-lg shadow-cyan-500",
  },
  {
    id: "0M0x7",
    title: "Nike Multi Smart Shoe",
    subtitle: "MEN Running Shoes",
    rating: "5+",
    btnText: "Buy Now",
    img: "/top-rated-7.png",
    price: 150,
    color: "from-yellow-500 to-yellow-500",
    shadow: "shadow-lg shadow-yellow-500",
  },
  {
    id: "0M0x8",
    title: "Nike Jordan Air Max",
    subtitle: "MEN Running Shoes",
    rating: "5+",
    btnText: "Buy Now",
    img: "/top-rated-8.png",
    price: 150,
    color: "from-[#936550] to-orange-900",
    shadow: "shadow-lg shadow-orange-800",
  },
  {
    id: "0M0x9",
    title: "Nike Old Max-x",
    subtitle: "MEN Running Shoes",
    rating: "5+",
    btnText: "Buy Now",
    img: "/top-rated-9.png",
    price: 150,
    color: "from-indigo-700 to-indigo-700",
    shadow: "shadow-lg shadow-indigo-500",
  },
  {
    id: "0M0x10",
    title: "Nike Lime Jordan 11",
    subtitle: "MEN Running Shoes",
    rating: "5+",
    btnText: "Buy Now",
    img: "/top-rated-10.png",
    price: 150,
    color: "from-green-600 to-lime-500",
    shadow: "shadow-lg shadow-lime-500",
  },
  {
    id: "0M0x11",
    title: "Nike Air Black Max",
    subtitle: "MEN Running Shoes",
    rating: "5+",
    btnText: "Buy Now",
    img: "/top-rated-11.png",
    price: 150,
    color: "from-slate-900 to-black",
    shadow: "shadow-lg shadow-black",
  },
  {
    id: "0M0x12",
    title: "Nike Zoom Max",
    subtitle: "MEN Running Shoes",
    rating: "5+",
    btnText: "Buy Now",
    img: "/top-rated-12.png",
    price: 150,
    color: "from-blue-900 to-blue-500",
    shadow: "shadow-lg shadow-blue-500",
  },
];

interface IDescription {
  title: string;
  subtitle: string;
  text: string;
  btnText: string;
  url: string;
  img: string;
}

const highLights: IDescription = {
  title: "HIGHLIGHTS",
  subtitle: "NIKE AIR WITH LIMITLESS CHOICES",
  text: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.",
  btnText: "Explore More",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: "description-highlights.png",
};

const featured: IDescription = {
  title: "FEATURED",
  subtitle: "NIKE SNEAKERS AIR LANCING SHOES",
  text: "The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
  btnText: "Explore More",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: "/description-featured.png",
};

export type { IShoe, IDescription };
export { popularShoes, topRatedShoes, highLights, featured };
