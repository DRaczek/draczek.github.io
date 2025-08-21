import './css/App.css';
import './css/customClasses.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MorePage from './pages/MorePage';


function App() {
  return (  
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />  
        <Route path="/more" element={<MorePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
