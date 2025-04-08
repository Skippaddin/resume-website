import React from "react";
import styles from "./Homepage.module.css";
import { DiscordFilled, MailFilled, GithubFilled, ProjectFilled } from "@ant-design/icons";
import IconTooltip from "../../components/IconTooltip/IconTooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam, faTwitch } from "@fortawesome/free-brands-svg-icons";

function Homepage() {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.presentation}>
        <img alt="profile picture" src="src\assets\Foto_downscaled.jpg"/>
        <h1>Martin Asmus</h1>
        <h2>Short Description</h2>
        <div className={styles.socials}>
          <IconTooltip link="mailto:masmus@uni-bremen.de" Icon={MailFilled} text="masmus@uni-bremen.de"/>
          <IconTooltip link="https://mobile4d-projekt.de" Icon={ProjectFilled} text="mobile4D"/>
          <IconTooltip link="https://discord.gg/Zf5zuKq7" Icon={DiscordFilled} text="Skippaddin"/>
          <IconTooltip link="https://github.com/Skippaddin" Icon={GithubFilled} text="Skippaddin"/>
          <IconTooltip link="https://steamcommunity.com/id/Skippaddin/" Icon={FontAwesomeIcon} text="Skippaddin" awesome={faSteam}/>
          <IconTooltip link="https://www.twitch.tv/skippaddin" Icon={FontAwesomeIcon} text="Skippaddin" awesome={faTwitch}/>
        </div>
      </div>
    </div>
    <div className={styles.aboutMe}>
      
    </div>
    </>
  );
}

export default Homepage;