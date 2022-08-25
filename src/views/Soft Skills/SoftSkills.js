import { Aside } from "../../components/Aside/Aside";
import { useNavigate } from "react-router-dom";
import module from './Soft-skills.module.css';
import { Footer } from "../../components/Footer/Footer";

export const SoftSkills = () => {
	const navigate = useNavigate();

	const handleOnClick = () => {
			navigate('/education');
			 }

	const handleOnClickNext = () => {
		navigate('/extras');
	}

    return (
			<main className={module.mainWork}>
			<section className={module.asideContainer}> <Aside/> </section>

			<section className={module.formContainer}>
				<h2 className={module.step}>Step 4</h2>
        		<h2 className={module.title}>Soft Skills</h2>
				<h3 className={module.description}>Choose 5 of the most important skills to show your talents!</h3>

			<section className={module.inputsCheck}>
			<input type="checkbox" />
			<label class={module.checkbox}>Communication
  				<span class="checkmark"></span>
			</label> <br />

			<input type="checkbox" />
			<label class={module.checkbox}>Teamwork
  				<span class="checkmark"></span>
			</label><br />

			<input type="checkbox" />
	  		<label class={module.checkbox}>Problem-solving
	  			<span class="checkmark"></span>
			</label><br />

			<input type="checkbox" />
			<label class={module.checkbox}>Time managment
				<span class="checkmark"></span>
			</label><br />

			<input type="checkbox" />
			<label class={module.checkbox}>Critical thinking
				<span class="checkmark"></span>
			</label><br />

			<input type="checkbox" />
			<label class={module.checkbox}>Decision-making
				<span class="checkmark"></span>
			</label><br />

			<input type="checkbox" />
			<label class={module.checkbox}>Organizational
				<span class="checkmark"></span>
	  		</label><br />

			<input type="checkbox" />
			<label class={module.checkbox}>Stress managment
			  <span class="checkmark"></span>
			</label><br />

			<input type="checkbox" />
			<label class={module.checkbox}>Other...
				<span class="checkmark"></span>
		  	</label><br />
			  </section>

			<section className={module.column2}>
			<input type="checkbox" />
		  	<label class={module.checkbox}>Adaptability
		  		<span class="checkmark"></span>
			</label><br />

			<input type="checkbox" />
			<label class={module.checkbox}>Conflict Managment
				<span class="checkmark"></span>
	  		</label><br />

			  <input type="checkbox" />
	  		<label class={module.checkbox}>Leadership
	  			<span class="checkmark"></span>
			</label><br />

			<input type="checkbox" />
			<label class={module.checkbox}>Creativity
				<span class="checkmark"></span>
  			</label><br />

			<input type="checkbox" />
  			<label class={module.checkbox}>Resourcefulness
  				<span class="checkmark"></span>
			</label><br />

			<input type="checkbox" />
			<label class={module.checkbox}>Persuasion
				<span class="checkmark"></span>
			</label><br />

			<input type="checkbox" />
			<label class={module.checkbox}>Openness to criticism
				<span class="checkmark"></span>
			</label><br />

			<input type="checkbox"  />
			<label class={module.checkbox}>Open minded
				<span class="checkmark"></span>
			</label>
			</section>

				<div className={module.navContainer}>
					<button className={module.buttnsNav} onClick={handleOnClick}>BACK</button>
					<button className={module.buttnsNav} onClick={handleOnClickNext}>NEXT</button>
				</div>
		
      </section>
	  <Footer />
			</main>
    )
}