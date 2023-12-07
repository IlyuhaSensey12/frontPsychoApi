import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import Main from './components/Main';
import Registr from './components/Registr';
import DoctorReg from './components/DoctorReg';
import Auth from './components/Auth';
import AuthUser from './components/AuthUser';
import FAQ from "./FAQ/FAQ";
import Blog from "./Blog/Blog";

function App() {
  return (
    <div>
    <Router>
      <Routes>
      <Route exact path="/" element={<Main/>}/>
      <Route path="/AuthUser" element={<AuthUser/>}/>
      <Route path="/Auth" element={<Auth/>}/>
      <Route path="/DoctorReg" element={<DoctorReg/>}/>
      <Route path="/Registration" element={<Registr/>}/>
      <Route path="/FAQ" element={<FAQ/>}/>
      <Route path="/Blog" element={<Blog/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
