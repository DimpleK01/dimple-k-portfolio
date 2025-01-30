import React from 'react'
import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
        <h2 className={styles.title}>Education</h2>
        <div className={styles.content}>
            <ul className={styles.education}>
                <li className={styles.educationItem}>
                    <img
                    src={getImageUrl("education/reva.png")}
                    alt={"Reva University Logo"}
                    />
                    <div className={styles.educationItemDetails}>
                    <h3>REVA University, Bengaluru, INDIA    ( 2019 - 2023 )</h3>
                    <h2>Bachelor of Technology in Computer Science and Engineering</h2>
                    <p>CGPA - 9.59</p>
                    </div>
                </li>
                <li className={styles.educationItem}>
                    <img
                    src={getImageUrl("education/vmpu.png")}
                    alt={"Vidya Mandir Logo"}
                    />
                    <div className={styles.educationItemDetails}>
                    <h3>Vidya Mandir Ind. PU College, Bengaluru, INDIA    ( 2017 - 2019 )</h3>
                    <h2>Science, PCMC (Physics, Chemistry, Mathematics, Computer science)</h2>
                    <p>Percentage - 93.33%</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
