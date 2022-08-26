import { Aside } from "../../components/Aside/Aside";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
//import { useNavigate } from "react-router-dom";
import module from "./Work-experience.module.css";
import { useNavigate } from "react-router-dom";
import { Tips } from "./Tips";

export const WorkExperience = () => {
  const navigate = useNavigate();

  const handleOnClickBack = () => {
    navigate("/options");
  };

  const handleOnClickNext = () => {
    navigate("/education");
    console.log(workExperience);
    localStorage.setItem("workExperience", JSON.stringify(workExperience));
  };

  const [technologies, setTechnologies] = useState([
    "JAVASCRIPT",
    "C++",
    "PYTHON",
    "HTML",
    "RUBY",
    "SQL",
    "C#",
    "REACT JS",
    "NODE JS",
    "ANGULAR JS",
    "LAMP",
    "MEAN",
    "MEVN",
  ]);

  const [workExperience, setWorkExperience] = useState({
    company: "",
    startYear: "",
    endYear: "",
    jobTittle: "",
    stack: [],
    jobDescription: "",
    project: "",
    projectDescription: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWorkExperience({ ...workExperience, [name]: value });
  };

  const handleChangeOnCheckbox = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { stack } = workExperience;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setWorkExperience({
        ...workExperience,
        stack: [...workExperience.stack, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setWorkExperience({
        ...workExperience(stack.filter((e) => e !== value)),
      });
    }
  };

  const [mostrarComponente, setMostrarComponente] = useState(false);

  return (
    <main className={module.mainWork}>
      <Aside />
      {mostrarComponente ? <Tips /> : null}
      <section className={module.formContainer}>
        <h2 className={module.secondStep}>Step 2</h2>
        <h2 className={module.workExpTittle}>Work Experience</h2>
        <button
          className={module.tips}
          onClick={() => setMostrarComponente(!mostrarComponente)}
        >
          <i></i>TIPS
        </button>
        <form className={module.formWork}>
          <label className={module.formLabel}>
            Company/Employer
            <br />
            <input
              className={module.formInput}
              name="company"
              onChange={handleChange}
              type="text"
              placeholder="e.g. Encora"
            />
            <br />
          </label>

          <label className={module.formLabel}>
            Years at the company <br />
            <select
              className={module.selector}
              onChange={handleChange}
              name="startYear"
            >
              <option value="Start Year">Start Year</option>
              <option value="2000">2000</option>
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
            <select
              className={module.selector}
              onChange={handleChange}
              name="endYear"
            >
              <option value="End Year">End Year</option>
              <option value="2000">2000</option>
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

          <label className={module.formLabel}>
            Job Tittle
            <br />
            <input
              onChange={handleChange}
              name="jobTittle"
              type="text"
              placeholder="e.g. Front End Engineer"
              className={module.formInput}
            />
          </label>

          <label className={module.formLabel}>Tech Stack</label>
          <br />
          <div className={module.checkboxTech}>
            {technologies.map((technology) => {
              return (
                <label className={module.techBtn}>
                  <input
                    selected
                    value={technology}
                    onChange={handleChangeOnCheckbox}
                    name="stack"
                    type="checkbox"
                  />
                  <span>{technology}</span>
                </label>
              );
            })}
          </div>
          <br />

          <button className={module.addBtn}>ADD TECH STACK</button>
          <br />

          <label className={module.formLabel}>
            Job Description
            <br />
            <input
              onChange={handleChange}
              name="jobDescription"
              type="textarea"
              placeholder="Type job description..."
              className={module.formTextarea}
            />
          </label>
        </form>

        <div className={module.navContainer}>
          <button className={module.btnNav} onClick={handleOnClickBack}>
            BACK
          </button>
          <button
            type="submit"
            className={module.btnNav}
            onClick={handleOnClickNext}
          >
            NEXT
          </button>
        </div>
      </section>
      <Footer />
    </main>
  );
};
