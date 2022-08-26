import { Aside } from "../../components/Aside/Aside";
import { useNavigate } from "react-router-dom";
import module from "./Soft-skills.module.css";
import { Footer } from "../../components/Footer/Footer";
import { useState } from "react";

export const SoftSkills = () => {
  const navigate = useNavigate();

  const handleOnClickNext = () => {
    navigate("/extras");
    console.log(skills);
    localStorage.setItem("soft skills", JSON.stringify(skills));
  };

  const handleOnClickBack = () => {
    navigate("/education");
  };

  const [skills, setSkills] = useState({ softSkills: [] });

  const handleChangeOnCheckbox = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { softSkills } = skills;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setSkills({
        ...skills,
        softSkills: [...skills.softSkills, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setSkills({
        ...skills(softSkills.filter((e) => e !== value)),
      });
    }
  };

  return (
    <main className={module.mainWork}>
      <Aside />
      <section className={module.formContainer}>
        <h2 className={module.step}>Step 4</h2>
        <h2 className={module.title}>Soft Skills</h2>
        <h3 className={module.description}>
          Choose 5 of the most important skills to show your talents!
        </h3>
        <form>
          <section className={module.checkboxText}>
            <input
              type="checkbox"
              name="softSkills"
              value="Communication"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Communication
              <span class="checkmark"></span>
            </label>{" "}
            <br />
            <input
              type="checkbox"
              name="softSkills"
              value="Teamwork"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Teamwork
              <span class="checkmark"></span>
            </label>
            <br />
            <input
              type="checkbox"
              name="softSkills"
              value="Problem-solving"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Problem-solving
              <span class="checkmark"></span>
            </label>
            <br />
            <input
              type="checkbox"
              name="softSkills"
              value="Time managment"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Time managment
              <span class="checkmark"></span>
            </label>
            <br />
            <input
              type="checkbox"
              name="softSkills"
              value="Critical thinking"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Critical thinking
              <span class="checkmark"></span>
            </label>
            <br />
            <input
              type="checkbox"
              name="softSkills"
              value="Decision-making"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Decision-making
              <span class="checkmark"></span>
            </label>
            <br />
            <input
              type="checkbox"
              name="softSkills"
              value="Organizational"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Organizational
              <span class="checkmark"></span>
            </label>
            <br />
            <input
              type="checkbox"
              name="softSkills"
              value="Stress managment"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Stress managment
              <span class="checkmark"></span>
            </label>
            <br />
            <input
              type="checkbox"
              name="softSkills"
              value="Other..."
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Other...
              <span class="checkmark"></span>
            </label>
            <br />
          </section>

          <section className={module.column2}>
            <input
              type="checkbox"
              name="softSkills"
              value="Adaptability"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Adaptability
              <span class="checkmark"></span>
            </label>
            <br />

            <input
              type="checkbox"
              name="softSkills"
              value="Conflict Managment"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Conflict Managment
              <span class="checkmark"></span>
            </label>
            <br />

            <input
              type="checkbox"
              name="softSkills"
              value="Leadership"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Leadership
              <span class="checkmark"></span>
            </label>
            <br />

            <input
              type="checkbox"
              name="softSkills"
              value="Creativity"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Creativity
              <span class="checkmark"></span>
            </label>
            <br />

            <input
              type="checkbox"
              name="softSkills"
              value="Resourcefulness"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Resourcefulness
              <span class="checkmark"></span>
            </label>
            <br />

            <input
              type="checkbox"
              name="softSkills"
              value="Persuasion"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Persuasion
              <span class="checkmark"></span>
            </label>
            <br />

            <input
              type="checkbox"
              name="softSkills"
              value="Openness to criticism"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Openness to criticism
              <span class="checkmark"></span>
            </label>
            <br />

            <input
              type="checkbox"
              name="softSkills"
              value="Open minded"
              onClick={handleChangeOnCheckbox}
            />
            <label class={module.checkbox}>
              Open minded
              <span class="checkmark"></span>
            </label>
          </section>
        </form>
        <div className={module.navContainer}>
          <button className={module.buttnsNav} onClick={handleOnClickBack}>
            BACK
          </button>
          <button
            type="submit"
            className={module.buttnsNav}
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
