import React, { useState } from "react";
import styles from './TechLink.module.css';

function TechLink({href, children, defaultColor = 'blue', hoverColor = 'red'}) {
  const [hovered, setHovered] = useState(false);

  const inlineStyles = {
    color: hovered ? hoverColor : defaultColor,
    textDecoration: 'none'
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onMouseLeave={() => setHovered(false)} onMouseEnter={() => setHovered(true)} style={inlineStyles}>{children}</a>
  );
}

export default TechLink;