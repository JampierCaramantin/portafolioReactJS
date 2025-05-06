//importamos react router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import { ThemeProvider } from "./ThemeContext/ThemeContext";
import Footer from "./Components/Footer/Footer";
//importamos el componente home

function App() {
  return (
    <>
      <ThemeProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
