import { useNavigate } from "react-router-dom";
import module from "./Extras.module.css";
import { Aside } from "../../components/Aside/Aside";
import { Footer } from "../../components/Footer/Footer";
import { useState } from "react";

export const Extras = () => {
  const navigate = useNavigate();

  const handleOnClickBack = () => {
    navigate("/soft-skills");
  };

  const handleOnClickNext = () => {
    navigate("/download-cv");      
    console.log(extrainfo);
    localStorage.setItem('extrainfo',JSON.stringify(extrainfo)); 
    };
  };
  
     const [extrainfo, setExtraInfo]= useState({
      certification:"",
      issuingCertification:"",
      issueYear:"",
      expirationYear:"",
      award:"",
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setExtraInfo({ ...extrainfo, [name]: value });
  };

  return (
    <main className={module.main}>
      <Aside />
      <section className={module.formContainer}>
        <h2 className={module.step}>Step 5</h2>
        <h1 className={module.title}>Extras</h1>
        <button className={module.tips}>
          <i></i>TIPS
        </button>
        <form>
          <label className={module.formLabel}>
            Certification
            <br />
            <input
              className={module.input}
              name='certification'
              type="text"
              onChange={handleChange}
              placeholder="e.g. Data Science"
            />
            <br />
          </label>
          <label className={module.formLabel}>
            Issuing Organization
            <br />
            <input
              className={module.input}
              name='issuingCertification'
              type="text"
              onChange={handleChange}
              placeholder="e.g. Deep Teaching Solutions"
            />
            <br />
          </label>
          <label className={module.formLabel}>
            Years of certification <br />
            <select className={module.selector} name='issueYear' onChange={handleChange}>
              <option selected value="Start Year">
                Issue Year
              </option>
              <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
            <select className={module.selector} name='expirationYear' onChange={handleChange}>
              <option selected value="End Year">
                Expiration Year
              </option>
              <option value="2001">2001</option>
                <option value="2002">2002</option>
                <option value="2003">2003</option>
                <option value="2004">2004</option>
                <option value="2005">2005</option>
                <option value="2006">2006</option>
                <option value="2007">2007</option>
                <option value="2008">2008</option>
                <option value="2009">2009</option>
                <option value="2010">2010</option>
                <option value="2011">2011</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
          </label>
          <br />
          <div className={module.formLabel}>
          <input
            type="checkbox"
            placeholder="This certification doesn’t expire"
          /> <span>This certification doesn't expire</span>
          </div>
          <br />
          <button className={module.addBtn}>ADD CERTIFICATION</button>
          <br />
          <label className={module.formLabel}>
            Award
            <br />
            <input
              className={module.input}
              name='award'
              type="text"
              onChange={handleChange}
              placeholder="e.g. Data Analytics Award"
            />
            <br />
          </label>
          <button className={module.addBtn}>ADD AWARD</button>
          <br />
          <div className={module.navContainer}>
            <button className={module.btnNav} onClick={handleOnClickBack}>
              BACK
            </button>
            <button className={module.btnNav} onClick={handleOnClickNext}>
              CREATE RESUME
            </button>
          </div>
        </form>
      </section>
      <Footer />
    </main>
  );
};
