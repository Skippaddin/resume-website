import React from "react";
import styles from "./Homepage.module.css";
import { DiscordFilled, MailFilled, GithubFilled, ProjectFilled } from "@ant-design/icons";
import IconTooltip from "../../components/IconTooltip/IconTooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSteam, faTwitch } from "@fortawesome/free-brands-svg-icons";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Projects from "../../components/Projects/Projects";
import { useTranslation } from "react-i18next";

function Homepage() {

  const { t } = useTranslation(['home']);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: `.${styles.about__me}`,
        start: '30% bottom'
      }
    });

    tl.from('.about1', {x: 100, opacity: 0, duration: 0.6})
      .from('.about2', {x: 100, opacity: 0, duration: 0.6}, '-=0.4')
      .from('.about3', {x: 100, opacity: 0, duration: 0.6}, '-=0.4')
      .from('.about4', {x: 100, opacity: 0, duration: 0.6}, '-=0.4');
  });

  return (
    <>
    <div className={styles.container}>
      <div className={styles.presentation}>
        <img alt="profile picture" src="assets\Foto_downscaled.jpg"/>
        <h1>Martin Asmus</h1>
        <h2>{t('tagline', {ns: 'home'})}</h2>
        <div className={styles.socials}>
          <IconTooltip link="mailto:masmus@uni-bremen.de" Icon={MailFilled} text="masmus@uni-bremen.de"/>
          <IconTooltip link="https://mobile4d-projekt.de" Icon={ProjectFilled} text="mobile4D"/>
          <IconTooltip link="https://discord.gg/HDnTtScu" Icon={DiscordFilled} text="Skippaddin"/>
          <IconTooltip link="https://github.com/Skippaddin" Icon={GithubFilled} text="Skippaddin"/>
          <IconTooltip link="https://steamcommunity.com/id/Skippaddin/" Icon={FontAwesomeIcon} text="Skippaddin" awesome={faSteam}/>
          <IconTooltip link="https://www.twitch.tv/skippaddin" Icon={FontAwesomeIcon} text="Skippaddin" awesome={faTwitch}/>
        </div>
      </div>
    </div>
    <div className={styles.about__me__container}>
      <div className={styles.about__me}>
        <p className="about1"><strong>{t('hello', {ns: 'home'})}</strong></p>
        <p className="about2">Ich bin Martin Asmus und komme aus Bremen.</p>
        <p className="about3">Ich habe eine große Leidenschaft für die Softwareentwicklung und liebe es neue Dinge zu lernen.</p>
        <p className="about4">Kontaktiere mich gerne und schaue dir meine Projekte an.</p>
      </div>
    </div>
    <div id="projects" className={styles.headline}>
      <h1>Projekte</h1>
    </div>
    <Projects/>
    </>
  );
}

export default Homepage;