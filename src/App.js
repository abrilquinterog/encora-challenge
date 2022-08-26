import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Education } from "./views/Education/Education";
import { Home } from "./views/Home/Home";
import { Personal } from "./views/Personal/Personal-Info";
import Options from "./views/Options/Options";
import { SoftSkills } from "./views/Soft Skills/SoftSkills";
import { Extras } from "./views/Extras/Extras";
import { PersonalProjects } from "./views/Experience/Personal-projects";
import { WorkExperience } from "./views/Experience/Work-experience";
import { Results } from "./views/Results/Results";
import { DownloadResume } from "./views/DownloadResume/DownloadResume";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="personal-info" element={<Personal />} />
      <Route path="options" element={<Options />} />
      <Route path="education" element={<Education />} />
      <Route path="soft-skills" element={<SoftSkills />} />
      <Route path="extras" element={<Extras />} />
      <Route path="work-experience" element={<WorkExperience />} />
      <Route path="personal-projects" element={<PersonalProjects />} />
      <Route path="download-cv" element={<Results />} />
      <Route path="download-resume" element={<DownloadResume />} />
    </Routes>
  );
}

export default App;
