import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import  LoginPage from './pages/LoginPage';
import { Dashboard } from './pages/dashboard/dashboard';
import RegisterPage from './pages/RegisterPage';


function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route  path="/Register" element={<RegisterPage/>}/>
          <Route  path="/" element={<LoginPage/>}/>
          <Route  path="/dashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
