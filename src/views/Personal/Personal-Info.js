import { Aside } from "../../components/Aside/Aside";
import { Footer } from "../../components/Footer/Footer";
import styles from "./personal-info.module.css";
import { useNavigate } from "react-router-dom";
import { countries } from "./countries.js";
import { useState } from "react";

export const Personal = () => {
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    country: "",
    job: "",
    summary: "",
    email: "",
    phone: "",
  });

  const handleOnSubmit = async () => {
    await localStorage.setItem('userInfo', JSON.stringify(personalInfo));
    navigate("/options");
    console.log(personalInfo);
    
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

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
            name="firstName"
              type="text"
              placeholder="Name"
              className={styles.input}
              required
              onChange={handleInputChange}
            />
          </label>

          <label className={styles.label}>
            Last Name
            <br />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className={styles.input}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />

          <label>
            Country
            <br />
            <select name="country" className={styles.input} onChange={handleInputChange}>
              {countries.map((country) => {
                return <option key={country} value={country}>{country}</option>;
              })}
            </select>
          </label>

          <label className={styles.label}>
            Job Title
            <br />
            <input
              type="text"
              name="job"
              placeholder="e.g. Software Developer"
              className={styles.input}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />

          <label className={styles.label}>
            Summary (150 characters)
            <br />
            <textarea
              placeholder="Type project's description..."
              name="summary"
              className={styles.textarea}
              onChange={handleInputChange}
              required
            />
          </label>
          <br />

          <h2 className={styles.subtitles}>Contact Information</h2>

          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              placeholder="email"
              className={styles.input}
              onChange={handleInputChange}
              required
              autoComplete="true"
            />
          </label>

          <label className={styles.label}>
            Phone number (Optional)
            <input
              type="number"
              name="phone"
              placeholder="Name"
              className={styles.input}
              onChange={handleInputChange}
              required
              pattern="/ [2-9] {2}\d {8} /"
            />
          </label>
        </form>
        <article className={styles.btnContainer}>
          <button className={styles.btn} onClick={handleOnSubmit}>
            NEXT
          </button>
        </article>
      </section>
      <Footer />
    </main>
  );
};
