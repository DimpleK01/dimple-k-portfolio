import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.subtitle}>Welcome to my portfolio</p>
        <h1 className={styles.title}>Hi, I'm <span>Dimple K</span></h1>
        <p className={styles.description}>
          Seasoned Software Engineer with 3+ years of experience building scalable automation solutions and full-stack applications. Specialized in Java, Python, and modern web technologies. I design systems that reduce failures by ~30% and improve team productivity.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
          <div className={styles.stat}>
            <h3>50+</h3>
            <p>Solutions Built</p>
          </div>
          <div className={styles.stat}>
            <h3>30%</h3>
            <p>Failure Reduction</p>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <a href="mailto:dimple.k1801@gmail.com" className={styles.contactBtn}>
            Get In Touch
          </a>
          <a
            href="https://drive.google.com/file/d/1VOJR2l6XQkeCAa-FkEfLATC0O3YlwdFo/view?usp=sharing"
            className={styles.resumeBtn}
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img
          src={getImageUrl("hero/me.png")}
          alt="Dimple K"
          className={styles.heroImg}
        />
        <div className={styles.glow}></div>
      </div>
    </section>
  );
};

