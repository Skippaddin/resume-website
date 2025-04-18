import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Kontaktiere mich</h2>
          <p>Email: <a rel="noopener noreferrer" href="mailto:masmus@uni-bremen.de">masmus@uni-bremen.de</a></p>
          <p>Discord: <a target="_blank" rel="noopener noreferrer" href="https://discord.gg/HDnTtScu">Skippaddin</a></p>
        </div>
      </div>
      <div className={styles.footer__end}>
        <div className={styles.footer__end__container}>
          <p>&copy; 2025 Martin Asmus</p>
          <a href="https://github.com/Skippaddin/resume-website" target="_blank" rel="noopener noreferrer">Source code</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;