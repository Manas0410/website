import { useCallback, useEffect, useState } from "react";
import { navLinks } from "../constants";

// Correct prop destructuring and types

const Header = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(false);
  const NavItems = ({ onClick = () => {} }: { onClick?: () => void }) => (
    <ul className="nav-ul">
      {navLinks.map((item) => (
        <li key={item.id} className="nav-li">
          <a
            href={item.href}
            className={`nav-li_a ${isSticky || isOpen ? "text-black" : ""}`}
            onClick={onClick}
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );

  const calcScroll = useCallback(() => {
    if (window.scrollY > 4) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", calcScroll);
    return () => {
      window.removeEventListener("scroll", calcScroll);
    };
  }, [calcScroll]);

  const toggleMenu = useCallback(() => setIsOpen((p) => !p), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <header
      className={`header ${isSticky ? "sticky" : ""} backdrop-blur-sm ${
        isOpen ? "sticky" : ""
      }`}
      id="home"
    >
      <div className="content-placement h-full">
        <div className="flex justify-between h-full items-center  mx-auto c-space">
          <a
            href="/"
            className="text-text-color-1 font-bold text-4xl transition-colors"
          >
            SMxDev
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu"
          >
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="toggle"
              className={`w-6 h-6 `}
            />
          </button>

          <nav className="sm:flex hidden">
            {/* Pass isSticky prop correctly */}
            <NavItems />
          </nav>
        </div>
      </div>

      {/* Mobile sidebar */}
      <div className={`nav-sidebar ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5 bg-white">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
