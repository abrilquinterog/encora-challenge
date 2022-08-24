import { Aside } from "../../components/Aside/Aside";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
//import { useNavigate } from "react-router-dom";
import module from './Work-experience.module.css';
import { useNavigate } from "react-router-dom";



export const WorkExperience = () => {
    const navigate = useNavigate();

    const handleOnClickBack = () => {
        navigate('/options')};
    
    const handleOnClickNext = () => {
        navigate('/education')};    
    
    const [technologies,setTechnologies]=useState(["JAVASCRIPT", "C++", "PYTHON", "HTML", "RUBY", 
    "SQL", "C#", "REACT JS", "NODE JS", "ANGULAR JS", "LAMP", "MEAN", "MEVN"]);

  return (
    <main className={module.mainWork}>
    <section className={module.asideContainer}> <Aside/> </section>
    <section className={module.formContainer}>
        <h2 className={module.secondStep}>Step 2</h2>
        <h2 className={module.workExpTittle}>Work Experience</h2>
        <button className={module.tips}><i></i>TIPS</button>
        <form className={module.formWork}>
            <label className={module.formLabel}>Company/Employer<br/>
            <input type="text" placeholder="e.g. Encora"/><br/>
            </label>

            <label>Years at the company <br/>
            <select className={module.selector}>
                <option selected value="Start Year">Start Year</option>
            </select>

            <select className={module.selector}>
                <option selected value="End Year">End Year</option>
            </select>
            </label><br/>

            <label>Job Tittle<br/>
            <input type="text" placeholder="e.g. Front End Engineer" className={module.formInput}/>
            </label>

            <label>Tech Stack</label><br/>
            <div className={module.checkboxTech}>
                {technologies.map(technology=>{
                    return(
                        <label className={module.techBtn}>
                        <input type="checkbox"/><span>{technology}</span>
                        </label>
                        )
                })}
            </div><br/>

            <button className={module.addBtn}>ADD TECH STACK</button><br/>

            <label>Job Description<br/>
            <input type="textarea" placeholder="Type job description..." className={module.formTextarea}/>
            </label>
        </form>
        
        <div className={module.navContainer}>
        <button className={module.btnNav} onClick={handleOnClickBack}>BACK</button>
        <button className={module.btnNav} onClick={handleOnClickNext}>NEXT</button>
        </div>
    </section>
   <Footer />
    </main>
  );
};

