import React from "react";
import styles from "./Homepage.module.css";
import { DiscordFilled } from "@ant-design/icons";

function Homepage() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.presentation}>
        <img alt="profile picture" src="src\assets\Foto_downscaled.jpg"/>
        <h1>Martin Asmus</h1>
        <h2>Short Description</h2>
        <div className={styles.socials}>
          <div className={styles.tooltip}>
            <DiscordFilled/>
            <span className={styles.tooltiptext}>Cooler Text</span>
          </div>
          <p>Lala</p>
          <p>Social</p>
        </div>
      </div>
    </div>
    <div className={styles.aboutMe}>
      
    </div>
    </>
  );
}

export default Homepage;