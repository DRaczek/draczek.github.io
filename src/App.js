import './App.css';
import './customClasses.css';
import './background.scss';
import ContactPage from './pages/ContactPage';
import LandingPage from './pages/LandingPage';
import OptionsPage from './pages/OptionsPage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import EducationPage from './pages/EducationPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MorePage from './pages/MorePage';


function App() {
  return (  
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />  
        <Route path="/options" element={<OptionsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/education" element={<EducationPage/>} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/more" element={<MorePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
