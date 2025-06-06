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

  /**
   * This applies to the layout of the upper part of the website including the about section.
   * None of the original code was copied and just the layout and usage of the tsparticles animation
   * was used as inspiration.
   * The MIT License (MIT)

Copyright (c) 2015 Diogo Correia

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
   */

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