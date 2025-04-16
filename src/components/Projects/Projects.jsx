import React from "react";
import styles from "./Projects.module.css";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";

function Projects() {

  const { t } = useTranslation(['projects']);

  return (
    <div className={styles.projects}>
      <Card color="#e4e4e4" bgColor="#1B262C" img="src\assets\react.svg" header={t('webProject.header', {ns: 'projects'})} text={t('webProject.text', {ns: 'projects'})} tech={t('webProject.technologies', {ns: 'projects', returnObjects: true})} showCollapser={false} linkColor="rgb(173, 216, 230)" linkHoverColor="rgb(120, 200, 200)"/>
      <Card color="#f0f0f0" bgColor="#228b22" img="src\assets\All&OnlyChests.webp" header={t('minecraft.header', {ns: 'projects'})} text={t('minecraft.text', {ns: 'projects', returnObjects: true})} tech={t('minecraft.technologies', {ns: 'projects', returnObjects: true})} showCollapser={true} linkColor="#ffa500" linkHoverColor="#ffcc70"/>
      <Card color="#e0e1dd" bgColor="#0d1b2a" img="src\assets\Logo_Universität_Bremen.png" header={t('bachelorThesis.header', {ns: 'projects'})} text={t('bachelorThesis.text', {ns: 'projects', returnObjects: true})} tech={t('bachelorThesis.technologies', {ns: 'projects', returnObjects: true})} showCollapser={true} linkColor="#3da9fc" linkHoverColor="#90cdf4"/>
      <Card color="#f9f9f9" bgColor="#002038" img="src\assets\mobile4d.png" header={t('bachelorProject.header', {ns: 'projects'})} text={t('bachelorProject.text', {ns: 'projects', returnObjects: true})} showCollapser={true} tech={t('bachelorProject.technologies', {ns: 'projects', returnObjects: true})} linkColor="#2e7d75" linkHoverColor="#24615b"/>
      <Card color="#2a2f33" bgColor="#f4f6f9" img="src\assets\gradebook.png" header={t('gradeBook.header', {ns: 'projects'})} text={t('gradeBook.text', {ns: 'projects', returnObjects: true})} showCollapser={true} tech={t('gradeBook.technologies', {ns: 'projects', returnObjects: true})} linkColor="#305f8c" linkHoverColor="#234868"/>
    </div>
  );
}

export default Projects;