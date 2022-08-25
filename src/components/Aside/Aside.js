import logo from "../../assets/encora-jobs-logo.png";
import greeting from "../../assets/Greeting Illustration.png";
import styles from "./aside.module.css";

export const Aside = (status) => {
  return (
    <aside className={styles.aside}>
      <img className={styles.logo} src={logo} alt="encora jobs logo" />
      <section className={styles.container}>
        <p className={styles.step}>
          <span className={styles.number}>1</span> Personal Information
        </p>
        <p className={styles.step}>
          <span className={styles.number}>2</span> Work Experience
        </p>
        <p className={styles.step}>
          <span className={styles.number}>3</span> Education
        </p>
        <p className={styles.step}>
          <span className={styles.number}>4</span> Soft Skills
        </p>
        <p className={styles.step}>
          <span className={styles.number}>5</span> Extras
        </p>
      </section>
      <img className={styles.img} src={greeting} alt="" />
    </aside>
  );
};
