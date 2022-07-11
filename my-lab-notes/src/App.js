import Home from './Components/Home';
import Logueo from './Components/Logueo';
import { Routes, Route } from 'react-router-dom';

//se incializa firebase auth en mi app
function App() {

  return (
  <>
    <Routes>
      <Route path="/" element={<Logueo/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  </>
  );
}

export default App;
