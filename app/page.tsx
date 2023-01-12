import Hero from "../sections/Hero";
import PopularSales from "../sections/PopularSales";
import TopRatedSales from "../sections/TopRatedSales";

export default function Home() {
  return (
    <>
      <Hero />
      <main>
        <PopularSales />
        <TopRatedSales />
      </main>
    </>
  );
}
