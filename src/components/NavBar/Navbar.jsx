import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import styles from './Navbar.module.css';

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 0 && !scrolled) {
        setScrolled(true);
      } else if (scrollY === 0 && scrolled) {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [scrolled]);

  return (
    <>
    <header>
      <nav className={`${styles.navbar} ${scrolled && styles.scrolled}`}>
        <NavLink className={styles.leftNav} to="/">Martin Asmus</NavLink>
        <div className={styles.rightNav}>
          <NavLink to="/">HOME</NavLink>
          <NavLink to="/">PROJEKTE</NavLink>
          <NavLink to="/">LEBENSLAUF</NavLink>
        </div>
      </nav>
    </header>
    </>
  );
}

export default NavBar;