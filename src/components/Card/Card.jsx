import React, { useRef } from "react";
import styles from "./Card.module.css";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Card({color, img, header, text}) {

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
    <div ref={ref} style={{backgroundColor: color}} className={styles.card}>
      <div className={styles.left}>
        {img && <img src={img}/>}
      </div>
      <div className={styles.right}>
        <h2>{header}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card;