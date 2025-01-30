import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <img
        src={getImageUrl("hero/myImg.png")}
        alt="My image"
        className={styles.heroImg}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dimple</h1>
        <p className={styles.description}>
          I'm a Software Developer with 2 years of experience.
          Contact me for any queries or download my resume!
        </p>
        <div className={styles.buttonContainer}>
          <a href="mailto:dimple.k1801@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="https://drive.google.com/uc?export=download&id=15x3IJ7anZqA614pxzbYKoWNx-1a0NZoR"
            className={styles.contactBtn}
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className={styles.topBlur} />
    </section>
  );
};
