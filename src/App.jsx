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
import { useEffect } from "react";
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import ScrollToTop from "./components/ScrollToTop";
import UserProfile from "./components/UserProfile";
import FavouritesPage from "./components/FavouritesPage";
import ResetPasswordPage from "./components/ResetPasswordPage";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./redux/actions";
import PlantBasedNavbarAuth from "./components/PlantBasedNavbarAuth";
import RecipesPageAuth from "./components/RecipesPageAuth";
import IngredientsPageAuth from "./components/IngredientsPageAuth";
import SingleRecipePage from "./components/SingleRecipePage";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);
  //const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    //navigate("/");
  };

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        {isAuthenticated ? (
          <PlantBasedNavbarAuth userName={user ? user.firstName : ""} onLogout={handleLogout} />
        ) : (
          <PlantBasedNavbar />
        )}
        <Routes>
          <Route
            path="/"
            element={<HomePage isAuthenticated={isAuthenticated} userName={user ? user.firstName : ""} />}
          />
          <Route path="/recipes" element={isAuthenticated ? <RecipesPageAuth /> : <RecipesPage />} />
          <Route path="/recipe/:recipeId" element={<SingleRecipePage />} />
          <Route path="/ingredients" element={isAuthenticated ? <IngredientsPageAuth /> : <IngredientsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/profile" element={<UserProfile userName={user ? user.firstName : ""} />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <PlantBasedFooter />
      </BrowserRouter>
      <TopScrollBtn />
    </div>
  );
}

export default App;
