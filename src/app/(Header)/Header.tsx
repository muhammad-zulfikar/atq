"use client";

import React, { FC, useEffect, useState } from "react";
import MainNav from "./MainNav";

export interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className = "" }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`nc-Header sticky top-0 w-full left-0 right-0 z-40 nc-header-bg transition-transform duration-300 ${
        isVisible ? "transform translate-y-0" : "transform -translate-y-full"
      } ${className}`}
    >
      <MainNav />
    </div>
  );
};

export default Header;
