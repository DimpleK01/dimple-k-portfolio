import React from "react";

import styles from "./Certifications.module.css";
import certificates from "../../data/certifications.json"
import { getImageUrl } from "../../utils";

export const Certifications = () => {
  return (
    <section className={styles.container} id="certifications">
      <h2 className={styles.title}>Certifications</h2>
      <div className={styles.content}>
        <ul className={styles.certificationItems}>
          {certificates.map((certificate, id) => {
            return (
              <li key={id} className={styles.certificationItem}>
                <img 
                src={getImageUrl(certificate.imageSrc)} 
                alt={`${certificate.issuedBy} Logo`} 
                />
                <h3>{`${certificate.name}`}</h3>
                <p>{`Issued by: ${certificate.issuedBy}`}</p>
                <p>{`Issued on: ${certificate.issuedOn}`}</p>
                <p>{`Credential ID: ${certificate.credentialID}`}</p>
              </li>
            );
          })}
        </ul>
        <img
          src={getImageUrl("certifications/certification.png")}
          alt="getting certified"
          className={styles.certificationImage}
        />
      </div>
    </section>
  );
};
