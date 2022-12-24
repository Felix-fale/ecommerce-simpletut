import "./default.scss";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
// Pages
import HomePage from "./pages/Homepage/HomePage";
import Registration from "./pages/Registration/Registration";
import MainLayout from "./layouts/MainLayout";
import HomePageLayout from "./layouts/HomePageLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={
          <HomePageLayout>
            <HomePage />
          </HomePageLayout>
        } />

        <Route exact path="/registration" element={
          <MainLayout>
            <Registration />
          </MainLayout>
        } />
      </Routes>
    </div>
  );
}

export default App;

//Lien du cours https://www.youtube.com/playlist?list=PL-Db3tEF6pB8UO2MmccX-5qeGDX9rek7Q 3- 11m59s
