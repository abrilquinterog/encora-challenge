import { Route, Routes } from "react-router-dom";
import './App.css';
import { Home } from "./views/Home/Home";
import { Personal } from "./views/Personal/Personal-Info";
import Options from "./views/Options/Options";

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='personal-info' element={<Personal />} />
    <Route path='options' element={<Options />} />
   </Routes>
  );
}

export default App;
