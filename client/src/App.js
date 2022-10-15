import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import MainPage from './Components/MainPage/MainPage';
import Characters from './Components/Characters/Characters';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="*" element={<div>Error</div>} />
      </Routes>
    </>
  );
}

export default App;
