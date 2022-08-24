import { Aside } from "../../components/Aside";
import { useState } from "react";
import "./Work-experience.css";
import { Footer } from "../../components/Footer/Footer";
//import { useNavigate } from "react-router-dom";


export const WorkExperience = () => {
    /*const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/personal-info');*/
    
    const [technologies,setTechnologies]=useState(["JAVASCRIPT", "C++", "PYTHON", "HTML", "RUBY", 
    "SQL", "C#", "REACT JS", "NODE JS", "ANGULAR JS", "LAMP", "MEAN", "MEVN"]);

  return (
    <main className="main-work">
    <Aside />
    <section className="form-container">
        <h2 className="second-step">Step 2</h2>
        <h1 className="work-tittle">Work Experience</h1>
        <button className="tips"><i></i>TIPS</button>
        <form className="form-work">
            <label className="form-label">Company/Employer<br/>
            <input type="text" placeholder="e.g. Encora"/><br/>
            </label>

            <label>Years at the company <br/>
            <select className="selector">
                <option selected value="Start Year">Start Year</option>
            </select>

            <select className="selector">
                <option selected value="End Year">End Year</option>
            </select>
            </label><br/>

            <label>Job Tittle<br/>
            <input type="text" placeholder="e.g. Front End Engineer" className="form-input"/>
            </label>

            <label>Tech Stack</label><br/>
            <div className="checkbox-tech">
                {technologies.map(technology=>{
                    return(
                        <label className="tech-btn">
                        <input type="checkbox"/><span>{technology}</span>
                        </label>
                        )
                })}
            </div><br/>

            <button>ADD TECH STACK</button><br/>

            <label>Job Description<br/>
            <input type="textarea" placeholder="Type job description..." className="form-textarea"/>
            </label>
        </form>
        
        <div className="nav-container">
        <button className="btn-nav">BACK</button>
        <button className="btn-nav">NEXT</button>
        </div>
    </section>
   <Footer />
    </main>
  );
};
