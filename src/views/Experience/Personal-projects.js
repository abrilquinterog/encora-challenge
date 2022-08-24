import { Aside } from "../../components/Aside";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";


export const PersonalProjects = () => {
    
    const [technologies,setTechnologies]=useState(["JAVASCRIPT", "C++", "PYTHON", "HTML", "RUBY", 
    "SQL", "C#", "REACT JS", "NODE JS", "ANGULAR JS", "LAMP", "MEAN", "MEVN"]);

  return (
    <main className="main-work">
    <Aside />
    <section>
        <h2 className="second-step">Step 2</h2>
        <h2 className="work-tittle">Personal Projects</h2>
        <button className="tips"><i></i>TIPS</button>
        <form>
            <label>Project Tittle <br/>
            <input type="text" placeholder="e.g. Work App"/>
            </label>

            <label>Industry<br/>
            <select className="selector">
                <option selected value="Select Industry">Select Industry</option>
            </select>
            </label><br/>
        
            <label>Project Description(150 characters)<br/>
            <input type="textarea" placeholder="Type project description..." className="form-textarea"/>
            </label><br/>

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

            <label >Lessons Learned(150 characters)<br/>
            <input type="textarea" placeholder="Type lessons learned..." className="form-textarea"/>
            </label><br/>

        <button>ADD OTHER PROJECT</button>


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
