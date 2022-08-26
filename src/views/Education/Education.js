import { useNavigate, Link } from "react-router-dom";
import { Aside } from "../../components/Aside/Aside";
import { Footer } from "../../components/Footer/Footer";
import module from "./Education.module.css";
import { useState } from "react";

export const Education = () => {
  const [education, setEducation] = useState({
    school: "",
    degree: "",
    study: "",
    start: 0,
    end: 0,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
    console.log(education);
  };

  const navigate = useNavigate();

  const handleOnClickNext = () => {
    navigate("/soft-skills");
    localStorage.setItem("education", JSON.stringify(education));
  };

  return (
    <main className={module.main}>
      <Aside />
      <section className={module.edSection}>
        <h4 className={module.step}>Step 3</h4>
        <h1 className={module.title}>Education</h1>
        <form className={module.containerForm}>
          <label className={module.fields}>
            School Name
            <input
              className={module.boxInput}
              type="text"
              name="school"
              onChange={handleInputChange}
              placeholder="e.g. University of Columbia"
            />
          </label>
          <label className={module.fields}>
            Degree
            <input
              className={module.boxInput}
              type="text"
              name="degree"
              onChange={handleInputChange}
              placeholder="e.g. Software Engineering"
            />
          </label>
          <label className={module.fields}>
            Field of study
            <input
              className={module.boxInput}
              type="text"
              name="study"
              onChange={handleInputChange}
              placeholder="e.g. Software Engineering"
            />
          </label>
          <br />
          <label className={module.fields}>Years of study </label>
          <br />
          <select className={module.selector} placeholder="Start Year">
            <option selected value="2000">
              Start Year
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
          <select className={module.selector} placeholder="Finish Year">
            <option selected value="2000">
              Finish Year
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
          </select>
          <br />
          <button className={module.addSchool}>ADD SCHOOL</button> <br />
          <section className={module.btnsSection}>
            <button className={module.buttons}>
              <Link
                to={".."}
                onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                }}
              >
                BACK
              </Link>
            </button>
            <button className={module.buttons} onClick={handleOnClickNext}>
              NEXT
            </button>
          </section>
        </form>
        <Footer />
      </section>
    </main>
  );
};
