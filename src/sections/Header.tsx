import { useCallback, useEffect, useState } from "react";

const Header = () => {
  const [IsSticky, setIsSticky] = useState<boolean>(false);

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
  }, []);

  return (
    <header className={`header ${IsSticky ? "sticky" : ""}`} id="home">
      abcsdb
    </header>
  );
};

export default Header;
