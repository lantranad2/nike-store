const Footer = () => {
  return (
    <footer className="border-teal-1 bg-footer py-28">
      <div className="border-red-1 boundary">
        <div className="flex flex-wrap gap-7">
          <div className="text-white w-[20rem] border-red-1">
            <h2 className="text-[1.8rem] uppercase font-semibold mb-5">
              About Nike
            </h2>
            <ul>
              <li>
                <a
                  className="text-[1.6rem] hover:pl-1 transition-[padding] duration-150"
                  href="#"
                >
                  News
                </a>
              </li>
              <li>
                <a
                  className="text-[1.6rem] hover:pl-1 transition-[padding] duration-150"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-[1.6rem] hover:pl-1 transition-[padding] duration-150"
                  href="#"
                >
                  Investors
                </a>
              </li>
              <li>
                <a
                  className="text-[1.6rem] hover:pl-1 transition-[padding] duration-150"
                  href="#"
                >
                  Purpose
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white w-[20rem] border-red-1">
            <h2 className="text-[1.8rem] uppercase font-semibold mb-5">
              Get Help
            </h2>
            <ul>
              <li>
                <a
                  className="text-[1.6rem] hover:pl-1 transition-[padding] duration-150"
                  href="#"
                >
                  Order Status
                </a>
              </li>
              <li>
                <a
                  className="text-[1.6rem] hover:pl-1 transition-[padding] duration-150"
                  href="#"
                >
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a
                  className="text-[1.6rem] hover:pl-1 transition-[padding] duration-150"
                  href="#"
                >
                  Payment Options
                </a>
              </li>
              <li>
                <a
                  className="text-[1.6rem] hover:pl-1 transition-[padding] duration-150"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="text-white w-[20rem] border-red-1">
            <h2 className="text-[1.8rem] uppercase font-semibold mb-5">
              Company
            </h2>
            <ul>
              <li>
                <a
                  className="text-[1.6rem] hover:pl-1 transition-[padding] duration-150"
                  href="#"
                >
                  Gift Cards
                </a>
              </li>
              <li>
                <a
                  className="text-[1.6rem] hover:pl-1 transition-[padding] duration-150"
                  href="#"
                >
                  Promotions
                </a>
              </li>
              <li>
                <a
                  className="text-[1.6rem] hover:pl-1 transition-[padding] duration-150"
                  href="#"
                >
                  Signup
                </a>
              </li>
              <li>
                <a
                  className="text-[1.6rem] hover:pl-1 transition-[padding] duration-150"
                  href="#"
                >
                  Nike Jouneral
                </a>
              </li>
              <li>
                <a
                  className="text-[1.6rem] hover:pl-1 transition-[padding] duration-150"
                  href="#"
                >
                  Send Us Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-white mt-10 flex flex-col items-center">
          <span>Copyright &copy; 2023</span>
          <span className="font-semibold">JSSTACK DEVELOPER</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
