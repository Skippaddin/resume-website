import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>Kontaktiere mich</h2>
          <p>Email: <a rel="noopener noreferrer" href="mailto:masmus@uni-bremen.de">masmus@uni-bremen.de</a></p>
          <p>Discord: <a rel="noopener noreferrer" href="https://discord.gg/HDnTtScu">Skippaddin</a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;