import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/header" element={<Header />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );

  function Topbar() {
    const navigate = useNavigate();

    return (
      <div>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/header")}>Header</button>
      </div>
    );
  }
}

export default App;
