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
    price: 250,
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
    price: 350,
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
    price: 520,
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
    price: 590,
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
    price: 190,
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
    price: 270,
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
    price: 610,
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
    price: 280,
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
    price: 960,
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

interface IStory {
  id: string;
  title: string;
  text: string;
  img: string;
  url: string;
  like: string;
  time: string;
  by: string;
  btnText: string;
}

const stories: IStory[] = [
  {
    id: "st-01",
    title: "Jayson Tatum Debuts",
    text: "Jordan Brands signature model for the past few years, Jayson Tatum will be dawning the Air Jordan 37 this season before attaining potentially his first signature sneaker with Jumpman, which he rumored to be in the works recently via his Twitter.",
    img: "/story-1.jpg",
    url: "https://sneakernews.com/2022/09/14/air-jordan-37-low/",
    like: "3/5",
    time: "11 Mins",
    by: "Jared Ebanks",
    btnText: "Read More",
  },
  {
    id: "st-02",
    title: "Bro’s Nike Zoom Freak 4",
    text: "Arriving right time for the Fall, this upcoming take on the Zoom Freak 4 seemingly draws inspiration from Thanksgiving. Orange and brown, two staples of the holiday, are used throughout the upper, dressing the parts not bathed in shades of grey.",
    img: "/story-2.jpg",
    time: "41 Mins",
    like: "5/5",
    url: "https://sneakernews.com/2022/09/14/nike-zoom-freak-4-ironstone-orange-trance-cobblestone-sail-dj6149-003/",
    by: "Michael Le",
    btnText: "Read More",
  },
  {
    id: "st-03",
    title: "Nike Air Max Plus",
    text: "The Nike Air Max Plus has enjoyed the reveal of several colorways these last few of months. And as we officially embark on the Fall season, an additional set have been added to the calendar, including this newly-revealed grey and orange colorway.",
    img: "/story-3.jpg",
    time: "7 Months",
    url: "https://sneakernews.com/2022/09/14/nike-air-max-plus-grey-orange-black-fb3358-001/",
    like: "5/5",
    by: "Michael Le",
    btnText: "Read More",
  },
  {
    id: "st-04",
    title: "Air Jordan Retro High OG",
    text: "Air Jordan Retro High OG popular series of AJ1s with the popular color-blocking with the original Yellow Toe flavor. The colorway was revealed back PE by musician Zach Myers, nearly four years later, Jordan fanatics will finally get their shot a GR release.",
    img: "/story-4.jpg",
    time: "2 Hours",
    url: "https://sneakernews.com/2022/03/09/air-jordan-1-retro-high-og-yellow-toe-555088-711/",
    like: "5/5",
    by: "Sneaker News",
    btnText: "Read More",
  },
  {
    id: "st-05",
    title: "Nike Air Zoom GT Cut 2",
    text: "The Bred coloryway of Zoom GT Cut 2 will be first to release this Friday, For Nike Members Nation World Wide while Sabrina Ionescus colorway is set for an October 13th release date. In the meantime, enjoy official images of both colorways below.",
    img: "/story-5.jpg",
    time: "1 Months",
    url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
    like: "3/5",
    by: "Jared Ebanks",
    btnText: "Read More",
  },
  {
    id: "st-06",
    title: "Puma Announces Breanna",
    text: "For the first time in over a decade, a signature basketball silhouette is being made for one of the WNBA’s best and brightest stars, Olympic Gold Medalist and Seattle Storm superstar Breanna Stewart. Puma Stewie 1 Quiet Fire will be available this Friday.",
    img: "/story-6.jpg",
    time: "25 Days",
    url: "https://sneakernews.com/2022/09/13/nike-zoom-gt-cut-2-officially-unveiled/",
    like: "3/5",
    by: "Jared Ebanks",
    btnText: "Read More",
  },
  {
    id: "st-07",
    title: "Nike Air Force Orange Color",
    text: "From lace toggles to city-inspired makeovers, the Nike Air Force 1 has delivered a number of unique modifications. Here though, the brand is taking things down quite a few notches, opting for a simple colorway helmed primarily by black and Laser Orange.",
    img: "/story-7.jpg",
    url: "https://sneakernews.com/2022/09/09/nike-air-force-1-black-laser-orange-fb7162-081/",
    time: "6 Days",
    like: "4/5",
    by: "Micael Le",
    btnText: "Read More",
  },
  {
    id: "st-08",
    title: "Hello Kitty and Adidas",
    text: "The world of Sanrio is vast and replete with many an iconic character. Few among the family, though, rival the immense influence of Hello Kitty, who’s played mascot for everything from Pringles merchandise to sneaker collaborations.",
    img: "/story-8.jpg",
    url: "https://sneakernews.com/2022/09/08/hello-kitty-adidas-originals-gw7166-gw7167-gw7168/",
    time: "5 Days",
    like: "4/5",
    by: "Micael Le",
    btnText: "Read More",
  },
  {
    id: "st-09",
    title: "Air Force 1 Low Expands",
    text: "The nighttime aesthetic seen here is applied to the tumbled black leather panels of the upper and perforated mesh construction of the tongue while Royal trim and forefoot Swooshes provide additional intrigue to the darkened palette.",
    img: "/story-9.jpg",
    url: "https://sneakernews.com/2022/09/08/nike-air-force-1-low-worldwide-black-royal-fb1840-001/",
    time: "5 Days",
    like: "4/5",
    by: "Micael Le",
    btnText: "Read More",
  },
];

export type { IShoe, IDescription, IStory };
export { popularShoes, topRatedShoes, highLights, featured, stories };
