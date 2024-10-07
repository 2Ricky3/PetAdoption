import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import HomePage from './components/HomePage';
import CentresPage from './components/CentresPage';
import PublishPage from './components/PublishPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/centres" element={<CentresPage />} />
        <Route path="/publish" element={<PublishPage />} />
      </Routes>
    </Router>
  );
}

export default App;
