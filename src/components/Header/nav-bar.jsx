// Ani
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
// Component
import { NaveLinks } from "./navLink";
import SearchModal from "../Search/search";
import { AccountHeader } from "./account";
import { CartHeader } from "./cartBook";
import { ToggleBar } from "./toggleBar";

export let NaveBar = () => {
  let [navBar, setNavBar] = useState("hid");

  useEffect(() => {
    const handleScroll = () => {
      setNavBar(window.scrollY > 100 ? "show" : "hid");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={`nav-bar ${navBar}`}>
        <div className="logo">
          <img
            src={process.env.PUBLIC_URL + "/images/Clint/client-image3.png"}
            alt="Book Store Logo"
          />
        </div>
        <NaveLinks />
        <div className="search-account-cart">
          <SearchModal title="Find a book" />
          <CartHeader />
          <AccountHeader />
          <ToggleBar />
        </div>
      </div>
    </motion.nav>
  );
};
