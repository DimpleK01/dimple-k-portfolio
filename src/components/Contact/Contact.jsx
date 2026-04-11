import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Let's Work Together</h2>
          <p className={styles.subtitle}>I'm always open to new opportunities and collaborations</p>
        </div>

        <div className={styles.contactGrid}>
          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            </div>
            <div className={styles.contactInfo}>
              <h4>Email</h4>
              <a href="mailto:dimple.k1801@gmail.com">dimple.k1801@gmail.com</a>
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            </div>
            <div className={styles.contactInfo}>
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/dimple-k" target="_blank" rel="noopener noreferrer">
                linkedin.com/dimple-k
              </a>
            </div>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactIcon}>
              <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            </div>
            <div className={styles.contactInfo}>
              <h4>GitHub</h4>
              <a href="https://github.com/DimpleK01" target="_blank" rel="noopener noreferrer">
                github.com/DimpleK01
              </a>
            </div>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <a href="mailto:dimple.k1801@gmail.com" className={styles.ctaButton}>
            Get In Touch
          </a>
        </div>
      </div>
    </footer>
  );
};
