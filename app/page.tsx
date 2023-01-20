"use client";

import Description from "../sections/Description";
import PopularSales from "../sections/PopularSales";
import TopRatedSales from "../sections/TopRatedSales";
import { featured, highLights } from "../components/data";
import Stories from "../sections/Stories";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import ShoppingCart from "../sections/ShoppingCart";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <ShoppingCart />
      <Header />
      <main>
        <PopularSales />
        <Description data={highLights} shoeFirst />
        <TopRatedSales />
        <Description data={featured} />
        <Stories />
      </main>
      <Footer />
    </>
  );
}
