import React from "react";
import styles from "./IconTooltip.module.css";

function IconTooltip({link, Icon, text, awesome}) {
  return (
    <div className={styles.tooltipWrapper}>
      <a href={link} target="_blank" rel="noopener noreferrer">{awesome ? <Icon icon={awesome}/> : <Icon/>}</a>
      <div className={styles.tooltipText}>{text}</div>
    </div>
  );
}

export default IconTooltip;