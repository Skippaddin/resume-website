import React from "react";
import styles from "./Card.module.css";

function Card({color, header, right}) {
  return (
    <div style={{backgroundColor: color, color: 'var(--font-color)'}} className={styles.card}>
      <div className={styles.header}>{header}</div>
      <div className={styles.left}>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default Card;