import { Route, Routes } from "react-router-dom";
import './App.css';
import { Home } from "./views/Home/Home";
import { Personal } from "./views/Personal/Personal-Info";

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='personal-info' element={<Personal />} />
   </Routes>
  );
}

export default App;
