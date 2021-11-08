import { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 140) {
        setAnimateHeader(true);
      } else setAnimateHeader(false);
    };
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <nav className={`header ${animateHeader && "header--animated"}`}>
      <h3>I am a nav</h3>
    </nav>
  );
};

export default Header;
