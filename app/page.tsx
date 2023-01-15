import Description from "../sections/Description";
import Hero from "../sections/Hero";
import PopularSales from "../sections/PopularSales";
import TopRatedSales from "../sections/TopRatedSales";
import { featured, highLights } from "../components/data";
import Stories from "../sections/Stories";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <PopularSales />
        <Description data={highLights} shoeFirst />
        <TopRatedSales />
        <Description data={featured} />
        <Stories />
      </main>
    </>
  );
}
