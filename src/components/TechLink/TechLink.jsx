import React, { useState } from "react";

function TechLink({href, children, defaultColor = 'blue', hoverColor = 'red'}) {
  const [hovered, setHovered] = useState(false);

  const inlineStyles = {
    color: hovered ? hoverColor : defaultColor,
    textDecoration: 'none',
    transition: 'color 250ms ease'
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" onMouseLeave={() => setHovered(false)} onMouseEnter={() => setHovered(true)} style={inlineStyles}>{children}</a>
  );
}

export default TechLink;