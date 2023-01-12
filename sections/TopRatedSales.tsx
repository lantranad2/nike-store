import Shoe from "../components/Shoe";
import Title from "../components/Title";

import { topRatedShoes } from "../components/data";

const TopRatedSales = () => {
  return (
    <section className="border-teal-1 py-28">
      <div className="border-red-1 boundary">
        <Title title="Top Rated Sales" className="mb-7" />
        <div className="border-teal-1 grid grid-cols-2 gap-8 xs:gap-6 xs-2:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {topRatedShoes.map((shoe) => (
            <Shoe key={shoe.id} shoe={shoe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedSales;
