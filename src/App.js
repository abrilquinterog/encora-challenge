import { Route, Routes } from "react-router-dom";
import './App.css';
import { Education } from "./views/Education/Education";
import { Home } from "./views/Home/Home";
import { Personal } from "./views/Personal/Personal-Info";
import Options from "./views/Options/Options";
import { SoftSkills } from "./views/Soft Skills/SoftSkills";

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='personal-info' element={<Personal />} />
    <Route path='options' element={<Options />} />
    <Route path='education' element= {<Education />} />
    <Route path='soft-skills' element= {<SoftSkills />} />
   </Routes>
  );
}

export default App;
