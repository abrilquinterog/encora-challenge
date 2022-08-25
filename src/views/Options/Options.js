import { Aside } from "../../components/Aside/Aside";
import { Footer } from "../../components/Footer/Footer";
import style from './Options.module.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import projectsImage from '../../assets/Money Illustration.png'
import projectsGif from '../../assets/Personal-Project.gif'
import workImage from '../../assets/Write Illustration.png'
import workGif from '../../assets/Work-Experience.gif'

const Options = () => {
    const [selected, setSelected] = useState()
    const navigate = useNavigate();

    const handleOnClickBack = () => {
        navigate('/personal-info');
    }

    const handleOnClickProjects = () => {
        navigate('/personal-projects');
    }

    const handleOnClickWork = () => {
        navigate('/work-experience');
    }

    const handleSelected =(kind)=>{
        setSelected(kind)
    }


  return (
    <main className={style.optionsMain}>
    {<Aside />}
    <section className={style.contentSection}>
        <container className={style.titleContainer}>
            <h3 className={style.secondStepTitle}>Step 2</h3>
            <h2 className={style.workExperienceTitle}>Work Experience</h2>
            <h3 className={style.optionTitle}>Select one option</h3>
        </container>

        <container className={style.cardsContainer}>
            <button className={style.cards} onClick={()=>{
                handleSelected('/personal-projects');
            }}>
                Personal<br/> Projects<br/>
                {<img className={style.projectsImage} src={selected==='/personal-projects'?projectsGif:projectsImage} alt='Money Illustration'/>}
            </button>
            <button className={style.cards} onClick={()=>{
                handleSelected('/work-experience')
            }} >
                Work<br/> Experience
                {<img className={style.workImage} src={selected==='/work-experience'?workGif:workImage} alt='Write Illustration'/>}
            </button>
        </container>

        <container className={style.buttonsContainer}>
            <button className={style.backButton} onClick={handleOnClickBack}>BACK</button>
            <button className={style.nextButton} disabled={selected==='/personal-projects' || selected==='/work-experience'?false:true} onClick={()=>{navigate(selected)}} >NEXT</button>
        </container>
    </section>

    <Footer />
    </main>
  )
}
export default Options