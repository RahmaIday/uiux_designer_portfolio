import './App.css';
import LandingPage from './Pages/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClassyPage from './Pages/ClassyPage';
import TutoringConsolePage from './Pages/TutoringConsolePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/classy" element={<ClassyPage />} />
        <Route path="/tutoring-console" element={<TutoringConsolePage />} />
      </Routes>
    </Router>
  );
}

export default App;
