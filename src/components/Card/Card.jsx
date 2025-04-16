import React, { useRef, useState } from "react";
import styles from "./Card.module.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Trans, useTranslation } from "react-i18next";
import TechLink from "../TechLink/TechLink";

function Card({color, bgColor, img, header, text, tech, showCollapser, linkColor = 'blue', linkHoverColor = 'red'}) {

  const [collapsed, setCollapsed] = useState(true);

  const { t } = useTranslation(['projects']);

  const cardRef = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: '150px bottom'
      }
    });
  
    tl.from(cardRef.current, {x: 200, opacity: 0, duration: 0.8});
  });

  const { contextSafe } = useGSAP();

  const textRef = useRef(null);

  const handleButtonClick = contextSafe(() => {
    const text = textRef.current;

    if (collapsed) {
      gsap.to(text, {maxHeight: text.scrollHeight, duration: 1});
    } else {
      gsap.to(text, {maxHeight: 300, duration: 1});
    }

    setCollapsed(prev => !prev);
  });

  return (
    <div ref={cardRef} style={{backgroundColor: bgColor}} className={styles.card}>
      <div style={{borderRightColor: color}} className={styles.left}>
        {img && <img src={img}/>}
      </div>
      <div style={{color: color}} className={styles.right}>
        <h2>{header}</h2>
        <div ref={textRef} className={`${styles.text}`}>
          {text &&
          <Trans i18nKey={text} components={{ul: <ul></ul>, li: <li></li>}}/>}
        </div>
        {showCollapser && (
          <div className={styles.collapser}>
          <div style={{borderBottom: `1px solid ${color}`}} className={styles.line}></div>
          <div onClick={handleButtonClick} className={styles.cButton}>
            <p style={{color: linkColor}}>{collapsed ? t('show', {ns: 'projects'}): t('hide', {ns: 'projects'})}</p>
          </div>
          <div style={{borderBottom: `1px solid ${color}`}} className={styles.line}></div>
        </div>
        )}
        {tech && 
        <div className={styles.tech}>
          <p>{t('technologies', {ns: 'projects'})}:</p>
          {Object.entries(tech).map(([name, url]) => (
            <TechLink href={url} children={name} defaultColor={linkColor} hoverColor={linkHoverColor}/>
          ))}
        </div>}
      </div>
    </div>
  );
}

export default Card;