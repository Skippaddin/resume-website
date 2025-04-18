import React from "react";
import styles from "./Projects.module.css";
import Card from "../Card/Card";
import { useTranslation } from "react-i18next";
import technologies from '../../locales/technologies.json';

function Projects() {

  const { t } = useTranslation(['projects']);

  return (
    <div className={styles.projects}>
      <Card color="#e4e4e4" bgColor="#1B262C" secondaryColor="#3FC1C9" img="assets\react.svg" header={t('webProject.header', {ns: 'projects'})} text={t('webProject.text', {ns: 'projects'})} tech={technologies.webProject.technologies} linkColor="rgb(173, 216, 230)" linkHoverColor="rgb(120, 200, 200)" more={t('webProject.more', {ns: 'projects', returnObjects: true})}/>
      <Card color="#f0f0f0" bgColor="#228b22" secondaryColor="#1B1F3B" img="assets\All&OnlyChests.webp" header={t('minecraft.header', {ns: 'projects'})} text={t('minecraft.text', {ns: 'projects', returnObjects: true})} tech={technologies.minecraft.technologies} linkColor="#ffa500" linkHoverColor="#ffcc70" more={t('minecraft.more', {ns: 'projects', returnObjects: true})}/>
      <Card color="#e0e1dd" bgColor="#0d1b2a" secondaryColor="#3E92CC" img="assets\Logo_Universität_Bremen.png" header={t('bachelorThesis.header', {ns: 'projects'})} text={t('bachelorThesis.text', {ns: 'projects', returnObjects: true})} tech={technologies.bachelorThesis.technologies} linkColor="#3da9fc" linkHoverColor="#90cdf4"/>
      <Card color="#f9f9f9" bgColor="#002038" secondaryColor="#9DBEBB" img="assets\mobile4d.png" header={t('bachelorProject.header', {ns: 'projects'})} text={t('bachelorProject.text', {ns: 'projects', returnObjects: true})} tech={technologies.bachelorProject.technologies} linkColor="#2e7d75" linkHoverColor="#24615b" more={t('bachelorProject.more', {ns: 'projects', returnObjects: true})}/>
      <Card color="#2a2f33" bgColor="#f4f6f9" secondaryColor="#D96C06" img="assets\gradebook.png" header={t('gradeBook.header', {ns: 'projects'})} text={t('gradeBook.text', {ns: 'projects', returnObjects: true})} tech={technologies.gradeBook.technologies} linkColor="#305f8c" linkHoverColor="#234868"/>
    </div>
  );
}

export default Projects;