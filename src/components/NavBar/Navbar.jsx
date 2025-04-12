import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import styles from './Navbar.module.css';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useTranslation } from "react-i18next";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  const { contextSafe } = useGSAP();

  const { t } = useTranslation(['navigation']);

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

  const handleProjectsClick = contextSafe((event) => {
    event.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: {
        y: '#projects',
        offsetY: 64
      },
    });
  });

  const handleHomeClick = contextSafe((event) => {
    event.preventDefault();
    gsap.to(window, {
      duration: 1,
      scrollTo: 0
    })
  });

  return (
    <>
    <header>
      <nav className={`${styles.navbar} ${scrolled && styles.scrolled}`}>
        <a onClick={handleHomeClick} className={styles.leftNav}>Martin Asmus</a>
        <div className={styles.rightNav}>
          <a onClick={handleHomeClick}>{t('home', {ns: 'navigation'})}</a>
          <a onClick={handleProjectsClick}>{t('projects', {ns: 'navigation'})}</a>
          <NavLink to="/">LEBENSLAUF</NavLink>
        </div>
      </nav>
    </header>
    </>
  );
}

export default NavBar;