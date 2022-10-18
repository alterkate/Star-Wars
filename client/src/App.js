import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/MainPage/MainPage';
import Characters from './Components/Characters/Characters';
import ErrorPage from './Components/ErrorPage/ErrorPage';

function App() {
  useLocation();

  return (
    <>
      {(window.location.pathname === '/'
      || window.location.pathname === '/characters') && <Navbar />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
