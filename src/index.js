import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LandingPage from './Pages/LandingPage';
import ClassyPage from './Pages/ClassyPage';
import TutoringConsolePage from './Pages/TutoringConsolePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/uiux_designer_portfolio/" element={<LandingPage/>} />
        <Route path="/uiux_designer_portfolio/classy" element={<ClassyPage />} />
        <Route path="/uiux_designer_portfolio/tutoring-console" element={<TutoringConsolePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
