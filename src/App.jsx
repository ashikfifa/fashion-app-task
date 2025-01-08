import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import LogoPositioning from "./pages/logo-page/logo_positioning";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tshirt-logo-up" element={<LogoPositioning />} />
      </Routes>
    </>
  );
}

export default App;
