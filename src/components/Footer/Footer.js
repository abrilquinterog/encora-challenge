import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
        <section className={styles.menu}>
            <p className={styles.options}>Terms of use</p>
            <p className={styles.options}>Privacy & cookies</p>
            <p className={styles.options}>Disclaimer</p>
        </section>
    </footer>
  )
}
