import React from "react";
import styles from "./Projects.module.css";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";

function Projects() {

  const { t } = useTranslation(['projects']);

  return (
    <div className={styles.projects}>
      <Card color="#e4e4e4" bgColor="#1B262C" img="src\assets\react.svg" header={t('webProject.header', {ns: 'projects'})} text={t('webProject.text', {ns: 'projects'})} tech={t('webProject.technologies', {ns: 'projects', returnObjects: true})} showCollapser={false} linkColor="rgb(173, 216, 230)" linkHoverColor="rgb(120, 200, 200)"/>
      <Card color="#f0f0f0" bgColor="#228b22" img="src\assets\All&OnlyChests.webp" header={t('minecraft.header', {ns: 'projects'})} text={t('minecraft.text', {ns: 'projects', returnObjects: true})} tech={t('minecraft.technologies', {ns: 'projects', returnObjects: true})} showCollapser={true}/>
    </div>
  );
}

export default Projects;