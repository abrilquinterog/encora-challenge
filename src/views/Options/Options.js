import { Aside } from "../../components/Aside/Aside";
import style from './Options.module.css';
import { Fragment, useState } from 'react';
import { useNavigate } from "react-router-dom";
import projectsImage from '../../assets/Money Illustration.png'
import projectsGif from '../../assets/Personal-Project.gif'
import workImage from '../../assets/Write Illustration.png'
import workGif from '../../assets/Work-Experience.gif'

const Options = () => {
    const [selected, setSelected] = useState(null)
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/personal-info');
    }
    const handleSelected =(kind)=>{
        setSelected(kind)
    }


  return (
    <main className={style.optionsMain}>
    {<Aside />}

    <section className={style.contentSection}>
        <container className={style.titleContainer}>
            Step 2
            Work Experience
            Select one option
        </container>

        <container className={style.cardsContainer}>
            <button className={style.cards} onClick={()=>{
                handleSelected('first')
            }}>
                Personal<br/> Projects<br/>
                <img className={style.projectsImage} src={selected==='first'?projectsGif:projectsImage} alt='Money Illustration'/>
            </button>
            <button className={style.cards} onClick={()=>{
                handleSelected('second')
            }}>
                Work<br/> Experience
                <img className={style.workImage} src={selected==='second'?workGif:workImage} alt='Money Illustration'/>
            </button>
        </container>

        <container className={style.buttonsContainer}>
            <button className={style.backButton} onClick={handleOnClick}>BACK</button>
            <button className={style.nextButton} >NEXT</button>
        </container>
    </section>

    {/* FOOTER */}
    </main>
  )
}
export default Options