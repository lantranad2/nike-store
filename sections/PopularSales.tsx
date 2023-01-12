import Shoe from "../components/Shoe";
import Title from "../components/Title";

import { popularShoes } from "../components/data";

const PopularSales = () => {
  return (
    <section className="border-teal-1 py-28">
      <div className="border-red-1 boundary">
        <Title title="Popular Sales" className="mb-7" />
        <div className="border-teal-1 grid grid-cols-2 gap-8 xs:gap-6 xs-2:grid-cols-1 lg:grid-cols-3">
          {popularShoes.map((shoe) => (
            <Shoe key={shoe.id} shoe={shoe} popular />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularSales;
