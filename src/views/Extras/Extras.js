import { useNavigate } from "react-router-dom";
import module from './Extras.module.css';
import { Aside } from "../../components/Aside/Aside";
import { Footer } from "../../components/Footer/Footer";

export const Extras = () => {
    const navigate = useNavigate();

		const handleOnClick = () => {
        navigate('/soft-skills');
         }
    /*const handleOnClickNext = () => {
        navigate('/download-cv');
    }*/

         return (
      <main className={module.main}>
    	<section className={module.asideContainer}> <Aside/> </section>
            <section className={module.formContainer}>
        <h2 className={module.step}>Step 5</h2>
        <h1 className={module.title}>Extras</h1>
        <form className={module.form}>
            <label className={module.formLabel}>Certification<br/>
            <input type="text" placeholder="e.g. Data Science"/><br/>
            </label>

            <label className={module.formLabel}>Issuing Organization<br/>
            <input type="text" placeholder="e.g. Deep Teaching Solutions"/><br/>
            </label>

            <label>Years of certification <br/>
            <select className={module.selector}>
                <option selected value="Start Year">Issue Year</option>
            </select>

            <select className={module.selector}>
                <option selected value="End Year">Expiration Year</option>
            </select>
            </label><br/>

            
            <input type="checkbox" placeholder="This certification doesn’t expire" /> <br />
						<button className={module.addBtn}>ADD CERTIFICATION</button><br/>

            <label className={module.formLabel}>Award<br/>
            <input type="text" placeholder="e.g. Data Analytics Award"/><br/>
            </label>

            <button className={module.addBtn}>ADD AWARD</button><br/>

            <div className={module.navContainer}>
              <button className={module.btnNav} onClick={handleOnClick}>BACK</button>
              <button className={module.btnNav}>CREATE RESUME</button>
            </div>
            </form>
            </section>
            <Footer />
            </main>
         )
         }