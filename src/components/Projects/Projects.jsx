import React from "react";
import styles from "./Projects.module.css";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";

function Projects() {

  const { t } = useTranslation(['projects']);

  return (
    <div className={styles.projects}>
      <Card className='card1' color="#1B262C" img="src\assets\react.svg" header={t('webProject.header', {ns: 'projects'})} text={t('webProject.text', {ns: 'projects'})}/>
      <Card color="#0F4C75"/>
    </div>
  );
}

export default Projects;