import './styleSheets/App.css';
import LogIn from './components/LogIn';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from "./components/signUp"
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LogIn/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;