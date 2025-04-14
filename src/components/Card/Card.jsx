import React, { useRef } from "react";
import styles from "./Card.module.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useTranslation } from "react-i18next";

function Card({color, bgColor, img, header, text, tech}) {

  const { t } = useTranslation(['projects']);

  const ref = useRef();

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: '30% bottom'
      }
    });
  
    tl.from(ref.current, {x: 200, opacity: 0, duration: 0.8});
  });

  return (
    <div ref={ref} style={{backgroundColor: bgColor}} className={styles.card}>
      <div className={styles.left}>
        {img && <img src={img}/>}
      </div>
      <div style={{color: color}} className={styles.right}>
      <h2>{header}</h2>
        {text && text.split("<br/>").map((part) => (
          <p>{part}</p>
        ))}
        {tech && 
        <div className={styles.tech}>
          <p>{t('technologies', {ns: 'projects'})}:</p>
          {Object.entries(tech).map(([name, url]) => (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {name}
            </a>
          ))}
        </div>}
      </div>
    </div>
  );
}

export default Card;