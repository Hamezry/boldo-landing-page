import { useState } from "react";
import { navLinks } from "../dummyData";
import { boldoImg, menu, close } from "../../public/assets";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="mx-auto sticky flex items-center justify-between py-6 px-5 sm:px-10 md:px-28">
      {/* Logo Section */}
      <div className="flex items-center gap-x-2">
        <img src={boldoImg} alt="boldo logo" className="h-[30px] sm:h-[35px]" />
        <h1 className="text-3xl sm:text-4xl font-bold text-[#0A2640]">Boldo</h1>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex space-x-1">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            className={`${
              link.title === "Login"
                ? "bg-white px-6 py-2 hover:bg-[#e6e8e7] border-2 border-[#0A2640] rounded-3xl duration-300"
                : "rounded-lg px-6 py-2 text-[#0A2640] hover:bg-[#3D5973] duration-300"
            }`}
          >
            {link.title}
          </a>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden">
        <img
          src={isMenuOpen ? close : menu}
          alt="menu"
          className="cursor-pointer"
          onClick={handleMenuToggle}
        />
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute right-5 top-16 flex flex-col items-center space-y-3 rounded-[10px] bg-[#1C3D5B] p-5 font-semibold sm:hidden  z-50">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${
                link.title === "Login"
                  ? "rounded-lg bg-white px-6 py-1 hover:bg-[#65E4A3]"
                  : "rounded-lg px-6 py-1 text-white hover:bg-[#3D5973]"
              }`}
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;



