import logo from '../../assets/encora-jobs-logo 2.png';
import landing from '../../assets/Landing-Illustration.gif';
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/personal-info');
    }

  return (
    <main>
    <aside>
      <img src={logo} alt='encora jobs logo'/>
      <img src={landing} alt=''/>
    </aside>
    <section>
      <h1>Build your Resume</h1>
      <p>Create your own Encora resume and join the team</p>
      <button onClick={handleOnClick}>START NOW!</button>
    </section>
  </main>
  )
};
