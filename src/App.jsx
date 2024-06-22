import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import TopScrollBtn from "./components/TopScrollBtn";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
      <TopScrollBtn />
    </div>
  );
}

export default App;
