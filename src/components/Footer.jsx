import { boldoImg } from "../../public/assets";
import { footerUrl } from "../dummyData";

const Subscribe = () => (
  <div className="max-w-lg w-full">
    <div className="flex max-w-md mx-auto gap-x-1.5">
      <label htmlFor="email-address" className="sr-only">
        Email address
      </label>
      <input
        id="email-address"
        name="email"
        type="email"
        autoComplete="email"
        required
        className="bg-[white] min-w-0 flex-auto rounded-full text-[#000000] border-0 px-5 py-2 outline-none sm:text-sm sm:leading-6"
        placeholder="Enter your email"
      />
      <button
        type="submit"
        className="flex-none rounded-full bg-[#65E4A3] text-[#0A2640] px-4 sm:px-7 py-2 text-sm font-semibold shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
      >
        Start now
      </button>
    </div>
  </div>
);

const FooterLink = ({ title, links }) => (
  <div className="flex flex-col ss:my-0 my-4 min-w-[150px]">
    <h4 className="font-semibold sm:text-[18px] sm:leading-[27px]">{title}</h4>
    <ul className="list-none mt-2 xs:mt-3 sm:mt-4">
      {links.map((link) => (
        <li
          key={link.name}
          className="font-normal sm:text-[18px] sm:leading-[27px] text-[#777777] hover:text-black cursor-pointer mb-2 xs:mb-3 sm:mb-4"
        >
          {link.name}
          {link.info && (
            <span className="ml-2 rounded-lg bg-[#65E4A3] px-2 py-1 text-sm font-semibold text-black">
              {link.info}
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer id="about">
      <div className="custom-email-bg max-w-6xl mx-auto md:rounded-lg bg-[#0A2640]">
        <div className="flex flex-col items-center px-5 py-10 sm:py-12">
          <h1 className="text-slate-50 max-w-3xl mx-auto text-center leading-8 sm:leading-[50px] md:leading-[60px] tracking-tight text-[28px] xs:text-[36px] sm:text-[40px] md:text-5xl mb-8">
            An enterprise template to ramp up your company website
          </h1>
          <Subscribe />
        </div>
      </div>

      <section className="mt-10 md:mt-14 mx-auto max-w-6xl px-5 flex justify-center items-center flex-col">
        <div className="flex justify-center items-start md:flex-row flex-col mb-6 w-full">
          <div className="flex-1 flex flex-col justify-start mr-10">
            <div className="flex items-center space-x-2">
              <img
                src={boldoImg}
                alt="Boldo Logo"
                className="h-[30px] sm:h-[35px]"
              />
              <h1 className="text-3xl sm:text-4xl font-bold">Boldo</h1>
            </div>

            <p className="font-normal text-[#777777] sm:text-[18px] sm:leading-[27px] max-w-md mt-4 mb-4 md:mb-8">
              Social media validation business model canvas graphical user
              interface launch party creative Facebook iPad Twitter.
            </p>

            <p className="font-normal sm:text-lg text-[#777777] leading-[27px]">
              All Rights Reserved.
            </p>
          </div>

          <div className="flex-[1.5] md:max-w-xl flex flex-row justify-between flex-wrap md:mt-0 mt-6 w-full">
            {footerUrl.map((footerLink) => (
              <FooterLink
                key={footerLink.title}
                title={footerLink.title}
                links={footerLink.links}
              />
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;


