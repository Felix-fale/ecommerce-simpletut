import "./default.scss";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// Pages
import HomePage from "./pages/Homepage/HomePage";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/registration" element={<Registration/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;

//Lien du cours https://www.youtube.com/playlist?list=PL-Db3tEF6pB8UO2MmccX-5qeGDX9rek7Q 3- 11m59s
