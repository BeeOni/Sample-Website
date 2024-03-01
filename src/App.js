// import './App.css';
import Home from './Pages/Home';
import Contact from './Pages/Contact/Contact';
import FAQ from './Pages/FAQ/FAQ';
import Terms from './Pages/Terms/Terms';
import {Routes, Route} from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path='' element={<Home/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/FAQ' element={<FAQ/>} />
      <Route path='/terms' element={<Terms/>} />
    </Routes>
  );
}


