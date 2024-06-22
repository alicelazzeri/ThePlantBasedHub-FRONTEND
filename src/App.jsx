import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import TopScrollBtn from "./components/TopScrollBtn";
import PlantBasedFooter from "./components/PlantBasedFooter";
import PlantBasedNavbar from "./components/PlantBasedNavbar";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PlantBasedNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <PlantBasedFooter />
      </BrowserRouter>
      <TopScrollBtn />
    </div>
  );
}

export default App;
