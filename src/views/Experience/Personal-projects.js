import { Aside } from "../../components/Aside/Aside";
import { useState } from "react";
import { Footer } from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import module from "./Personal-projects.module.css";
import { TipsPersonal } from "../Experience/TipsPersonal";

export const PersonalProjects = () => {
  const navigate = useNavigate();

  const handleOnClickBack = () => {
    navigate("/options");
  };

  const handleOnClickNext = () => {
    navigate("/education");
    console.log(PersonalProjects);
    localStorage.setItem("personalProjects", JSON.stringify(PersonalProjects));
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

  const [PersonalProjects, setPersonalProjects] = useState({
    projectTittle: "",
    industry: "",
    projectDescription: "",
    stack: [],
    lessons: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalProjects({ ...PersonalProjects, [name]: value });
  };

  const handleChangeOnCheckbox = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { stack } = setPersonalProjects;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setPersonalProjects({
        ...PersonalProjects,
        stack: [...PersonalProjects.stack, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setPersonalProjects({
        ...PersonalProjects(stack.filter((e) => e !== value)),
      });
    }
  };

  const [mostrarComponente, setMostrarComponente] = useState(false);

  return (
    <main className={module.mainWork}>
      <Aside />
      <section className={module.formContainer}>
        <h2 className={module.secondStep}>Step 2</h2>
        <h2 className={module.workExpTittle}>Personal Projects</h2>
        {mostrarComponente ? <TipsPersonal /> : null}
        <form>
          <label className={module.label}>
            Project Tittle <br />
            <input
              className={module.input}
              onChange={handleChange}
              name="projectTittle"
              type="text"
              placeholder="e.g. Work App"
            />
          </label>

          <label className={module.label}>
            Industry
            <br />
            <select
              className={module.input}
              onChange={handleChange}
              name="industry"
            >
              <option value="Raw Materials">Raw Materials</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Services">Services</option>
              <option value="Information Services">Information Services</option>
              <option value="Human Services">Human Services</option>
              <option value="Select Industry">Select Industry</option>
            </select>
          </label>
          <br />

          <label className={module.label}>
            Project Description(150 characters)
            <br />
            <textarea
              onChange={handleChange}
              name="projectDescription"
              type="textarea"
              placeholder="Type project description..."
              className={module.formTextarea}
              maxLength={150}
            />
          </label>
          <br />

          <label className={module.label}>Tech Stack</label>
          <br />
          <div className={module.checkboxTech}>
            {technologies.map((technology) => {
              return (
                <label className={module.techBtn}>
                  <input
                    selected
                    value={technology}
                    onChange={handleChangeOnCheckbox}
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

          <label className={module.label}>
            Lessons Learned (150 characters)
            <br />
            <textarea
              onChange={handleChange}
              name="lessons"
              type="textarea"
              placeholder="Type lessons learned..."
              className={module.formTextarea}
              maxLength={150}
            />
          </label>
          <br />

          <button className={module.addBtn}>ADD OTHER PROJECT</button>
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
