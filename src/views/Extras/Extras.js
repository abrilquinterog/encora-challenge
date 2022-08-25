import { useNavigate } from "react-router-dom";
import module from './Extras.module.css';
import { Aside } from "../../components/Aside/Aside";
import { Footer } from "../../components/Footer/Footer";
import { useState } from "react";

export const Extras = () => {
  const navigate = useNavigate();

  const handleOnClickBack = () => {
    navigate("/soft-skills");
  };
  
  const handleOnClickNext = () => {
        navigate('/download-cv');      
          console.log(extrainfo);
          localStorage.setItem('extrainfo',JSON.stringify(extrainfo)); 
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
    	<section className={module.asideContainer}> <Aside/> </section>
            <section className={module.formContainer}>
        <h2 className={module.step}>Step 5</h2>
        <h1 className={module.title}>Extras</h1>
        <form className={module.form}>
            <label className={module.formLabel}>Certification<br/>
            <input name='certification' onChange={handleChange} type="text" placeholder="e.g. Data Science"/><br/>
            </label>

            <label className={module.formLabel}>Issuing Organization<br/>
            <input name='issuingCertification' onChange={handleChange} type="text" placeholder="e.g. Deep Teaching Solutions"/><br/>
            </label>

            <label>Years of certification <br/>
            <select name='issueYear' onChange={handleChange} className={module.selector}>
                <option selected value="Start Year">Issue Year</option>
            </select>

            <select name='expirationYear' onChange={handleChange} className={module.selector}>
                <option selected value="End Year">Expiration Year</option>
            </select>
            </label><br/>

            
            <input type="checkbox" placeholder="This certification doesn’t expire" /> <br />
						<button className={module.addBtn}>ADD CERTIFICATION</button><br/>

            <label className={module.formLabel}>Award<br/>
            <input name='award' onChange={handleChange} type="text" placeholder="e.g. Data Analytics Award"/><br/>
            </label>

            <button className={module.addBtn}>ADD AWARD</button><br/>

            <div className={module.navContainer}>
              <button className={module.btnNav} onClick={handleOnClickBack}>BACK</button>
              <button type="submit" className={module.btnNav} onClick={handleOnClickNext}>CREATE RESUME</button>
            </div>
            </form>
            </section>
            <Footer />
            </main>
         )
         }