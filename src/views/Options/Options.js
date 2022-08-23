//import { Aside } from '../../components/Aside';
import './options.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import img1 from '../../assets/Money Illustration.png'
import img2 from '../../assets/Write Illustration.png'
import gif1 from '../../assets/Personal-Project.gif'
import gif2 from '../../assets/Work-Experience.gif'

const Options = () => {
    const [selected,setSelected] = useState(null)
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate('/personal-info');
    }
    const handleSelected =(kind)=>{
        setSelected(kind)
    }


  return (
    <main className="main">
    {/* <Aside /> */}

    <section className="content-section">
        <container className="title-container">
            <p>Step 2<br/>
            Work Experience<br/>
            Select one option<br/>
            </p>
        </container>

        <container className="cards-container">
            <button className="cards" onClick={()=>{
                handleSelected('first')
            }}>
                Personal<br/> Projects<br/>
                <img src={selected==='first'?gif1:img1} alt='Money Illustration'/>
            </button>
            <button className="cards" onClick={()=>{
                handleSelected('second')
            }}>
                Work<br/> Experience
                <img  src={selected==='second'?gif2:img2} alt='Money Illustration'/>
            </button>
        </container>

        <container className="buttons-container">
            <button className="back-button" onClick={handleOnClick}>BACK</button>
            <button className="next-button" >NEXT</button>
        </container>
    </section>

    {/* FOOTER */}
    </main>
  )
}
export default Options