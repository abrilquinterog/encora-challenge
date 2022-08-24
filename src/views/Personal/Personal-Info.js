import { Aside } from "../../components/Aside/Aside";
import { Footer } from "../../components/Footer/Footer";
import styles from "./personal-info.module.css";

export const Personal = () => {
  return (
    <main className={styles.main}>
      <Aside />
      <section className={styles.container}>
        <h2 className={styles.firstStep}>Step 1</h2>
        <h2 className={styles.titles}>Personal Information</h2>
        <button className={styles.tips}>
          <i></i>TIPS
        </button>
        <form>
          <label className={styles.label}>
            First Name <br />
            <input
              type="text"
              placeholder="Name"
              className={styles.inputText}
            />
          </label>

          <label className={styles.label}>
            Last Name
            <br />
            <input
              type="text"
              placeholder="Last name"
              className={styles.inputText}
            />
          </label>
          <br />

          <label className={styles.label}>
            Job Title
            <br />
            <input
              type="text"
              placeholder="e.g. Software Developer"
              className={styles.inputText}
            />
          </label>
          <br />

          <label className={styles.label}>
            Summary (150 characters)
            <br />
            <textarea
              placeholder="Type project's description..."
              className={styles.textarea}
            />
          </label>
          <br />

          <h2 className={styles.subtitles}>Contact Information</h2>

          <label className={styles.label}>
            Email
            <input
              type="email"
              placeholder="Name"
              className={styles.inputText}
            />
          </label>

          <label className={styles.label}>
            Phone number (Optional)
            <input
              type="number"
              placeholder="Name"
              className={styles.inputText}
            />
          </label>
        </form>
        <article className={styles.btnContainer}>
          <button className={styles.btn}>BACK</button>
          <button className={styles.btn}>NEXT</button>
        </article>
      </section>
      <Footer />
    </main>
  );
};
