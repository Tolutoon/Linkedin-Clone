import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Login from './components/Login';
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/home"
              element={<div><Header/><Home/></div>}
            />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
