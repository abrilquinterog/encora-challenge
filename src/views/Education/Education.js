// import { Aside } from "../../components/Aside/Aside";
import { useNavigate } from "react-router-dom";
import { Aside } from "../../components/Aside/Aside";
import { Footer } from "../../components/Footer/Footer";
import "../Education/Education.css";

export const Education = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/soft-skills");
  };

  return (
    <main>
      <Aside />
    <section className="ed-section">
      <h4 className="step">Step 3</h4>
      <h1 className="title">Education</h1>
      <h3 className="fields">School Name</h3>
      <input
        className="box-input"
        type="text"
        name="school"
        placeholder="e.g. University of Columbia"
      />
      <h3 className="fields">Degree</h3>
      <input
        className="box-input"
        type="text"
        name="degree"
        placeholder="e.g. Software Engineering"
      />
      <h3 className="fields">Field of study</h3>
      <input
        className="box-input"
        type="text"
        name="study"
        placeholder="e.g. Software Engineering"
      />
      <h3 className="fields">Years of study</h3>
      <input
        className="box-input"
        type="number"
        name="start"
        placeholder="Start Year"
      />
      <input
        className="box-input"
        type="number"
        name="end"
        placeholder="End Year"
      />
      <button className="add-school">ADD SCHOOL</button>
      <section className="btns-section">
        <button className="buttons">BACK</button>
        <button className="buttons" onClick={handleOnClick}>
          NEXT
        </button>
      </section>
    </section>
    <Footer />
    </main>
  );
};

