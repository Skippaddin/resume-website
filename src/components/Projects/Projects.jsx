import React from "react";
import styles from "./Projects.module.css";
import Card from "../Card/Card";

function Projects() {

  const projectHeader1 = <h2>Meine Webseite</h2>;

  return (
    <div className={styles.projects}>
      <Card color="#1B262C" header={projectHeader1}/>
      <Card color="#0F4C75"/>
    </div>
  );
}

export default Projects;