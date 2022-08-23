import logo from "../assets/encora-jobs-logo 2.png";
import greeting from "../assets/Greeting Illustration.png";
import { Stepper } from "react-form-stepper";

export const Aside = () => {
  return (
    <aside>
      <img src={logo} alt="encora jobs logo" />
      <Stepper
        steps={[{ label: "Personal information" }, { label: "Work Experience" }, { label: "Education" }, {label: 'Soft Skills'}, {label: "Extras"}]}
        activeStep={0}
        className='stepper'
        disabledColor='#FFFFFF'
        activeColor='#40C1EF'
        completedColor='#44197E'
      />
      <img src={greeting} alt=''/>
    </aside>
  );
};
