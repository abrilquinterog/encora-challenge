import logo from "../../assets/encora-jobs-logo 2.png";
import landing from "../../assets/Landing-Illustration.gif";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/personal-info");
  };

  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <img className={styles.logo} src={logo} alt="encora jobs logo" />
        <img src={landing} alt="" className={styles.img} />
      </aside>
      <section className={styles.section}>
        <h1 className={styles.h1}>Build your Resume</h1>
        <p className={styles.p}>
          Create your own Encora resume and join the team
        </p>
        <button className={styles.btn} onClick={handleOnClick}>
          START NOW!
        </button>
      </section>
    </main>
  );
};
