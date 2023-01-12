import { IDescription } from "../components/data";

interface DescriptionProps {
  data: IDescription;
  shoeFirst?: boolean;
}

const Description: React.FC<DescriptionProps> = ({
  data: { title, subtitle, text, btnText, url, img },
  shoeFirst,
}) => {
  return (
    <section className="border-teal-1 py-28">
      <div className="border-red-1 boundary flex flex-col items-center md:flex-row space-y-14 md:space-y-0">
        <div className="flex flex-col items-center md:items-start md:flex-1 space-y-3 border-teal-1">
          <h2 className="border-red-1 font-bold text-[2.8rem] leading-none bg-gradient-to-tr from-blue-500 to-sky-500 text-transparent bg-clip-text">
            {title}
          </h2>
          <h3 className="border-red-1 text-center font-bold text-[2.2rem] leading-none">
            {subtitle}
          </h3>
          <p className="border-red-1 text-center md:text-left">{text}</p>
          <button className="bg-gray-700 text-white text-[1.4rem] px-5 py-2 rounded-xl shadow-md shadow-gray-700 active:scale-90 transition-transform duration-200">
            {btnText}
          </button>
        </div>
        <div
          className={`mr-0 ml-0 ${
            shoeFirst ? "md:order-first md:mr-10" : "md:ml-10"
          } w-4/5 xs-3:w-full max-w-[40rem] md:w-3/5 md:max-w-full md:flex-1 border-teal-1`}
        >
          <img
            className="w-full rotate-[10deg] hover:-rotate-[15deg] shoe-transition"
            src={img}
            alt={title}
          />
        </div>
      </div>
    </section>
  );
};

export default Description;
