"use client";

import Facebook from "../public/facebook.svg";
import Messenger from "../public/messenger.svg";
import Instagram from "../public/instagram.svg";
import Twitter from "../public/twitter.svg";
import Youtube from "../public/youtube.svg";
import Clip from "../components/Clip";
import Navbar from "./Navbar";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Header = () => {
  const { ref, inView } = useInView({ threshold: 1 });
  return (
    <>
      <Navbar visible={!inView} />
      <header ref={ref} className="border-teal-1 relative pt-32 pb-28">
        <div className="absolute inset-0 bg-header clip-path-hero" />
        <div className="border-red-1 relative z-10 boundary flex flex-col space-y-10 items-center">
          <h1 className="flex flex-col space-y-3 items-center text-white">
            <span className="text-5xl xs-2:text-[2.8rem] xs-3:text-[2.4rem] xs-4:text-[2.1rem] font-extrabold">
              Play With Electric Nike
            </span>
            <span className="text-5xl xs-2:text-[2.8rem] xs-3:text-[2.4rem] xs-4:text-[2.1rem] font-extrabold">
              Adapt 2.0 Sneakers
            </span>
          </h1>
          <button className="bg-gray-200 px-9 py-3 xs-2:px-5 xs-2:py-2 rounded-full text-2xl xs-4:text-xl btn-effect">
            Explore Product
          </button>
          <div className="max-w-[30rem] xs:max-w-[27rem] xs-2:max-w-[20rem] xs-3:max-w-[17rem] xs-4:max-w-[15rem]">
            <img
              className=" -rotate-[25deg] hover:rotate-0 shoe-transition"
              src="/hero.png"
              alt="A Nike Shoe"
            />
          </div>
          <div className="border-red-1 social flex flex-col justify-center space-y-3 absolute right-[1.6rem] top-1/2 -translate-y-1/2">
            <a
              className="w-[2.5rem] hover:scale-110 transition-transform duration-200"
              href="#"
            >
              <Facebook />
            </a>
            <a
              className="w-[2.5rem] hover:scale-110 transition-transform duration-200"
              href="#"
            >
              <Messenger />
            </a>
            <a
              className="w-[2.5rem] hover:scale-110 transition-transform duration-200"
              href="#"
            >
              <Instagram />
            </a>
            <a
              className="w-[2.5rem] hover:scale-110 transition-transform duration-200"
              href="#"
            >
              <Twitter />
            </a>
            <a
              className="w-[2.5rem] hover:scale-110 transition-transform duration-200"
              href="#"
            >
              <Youtube />
            </a>
          </div>
          <div className="absolute top-1/2 left-[1.6rem] -translate-y-1/2 flex flex-col space-y-3">
            <Link href="/video/clip_1.mp4" target="_blank">
              <Clip image="/vcover1.png" video="/clip_1.mp4" />
            </Link>
            <Link href="/video/clip_2.mp4" target="_blank">
              <Clip image="/vcover2.png" video="/clip_2.mp4" />
            </Link>
            <Link href="/video/clip_3.mp4" target="_blank">
              <Clip image="/vcover3.png" video="/clip_3.mp4" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
