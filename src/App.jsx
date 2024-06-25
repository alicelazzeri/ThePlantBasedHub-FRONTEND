import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import TopScrollBtn from "./components/TopScrollBtn";
import PlantBasedFooter from "./components/PlantBasedFooter";
import PlantBasedNavbar from "./components/PlantBasedNavbar";
import NotFound from "./components/NotFound";
import RecipesPage from "./components/RecipesPage";
import IngredientsPage from "./components/IngredientsPage";
import AboutPage from "./components/AboutPage";
import ContactsPage from "./components/ContactsPage";
import { useEffect, useState } from "react";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleLogin = () => {
    // Static login for now
    setIsAuthenticated(true);
    setUserName("Alice");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserName("");
  };

  return (
    <div
      className="App"
      data-aos="fade-zoom-in"
      data-aos-easing="linear"
      data-aos-duration="1000"
      data-aos-offset="200"
    >
      <BrowserRouter>
        <PlantBasedNavbar
          isAuthenticated={isAuthenticated}
          userName={userName}
          onLogin={handleLogin}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<HomePage isAuthenticated={isAuthenticated} userName={userName} />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/ingredients" element={<IngredientsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <PlantBasedFooter />
      </BrowserRouter>
      <TopScrollBtn />
    </div>
  );
}

export default App;
