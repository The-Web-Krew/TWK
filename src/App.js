import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Heros from "./components/Heros";
import About from "./components/About";
import Tech from "./components/Tech";
import LetTalk from "./components/letTalk";
import Footer from "./components/Footer";

import Contact from './pages/Contact';
import Home from "./pages/Home";

// import Index from './pages/Index.jsx';

function App() {
  return (
    <div className="App">
      <Router basename="/">
        {/* Add Menu Component */}
        <Navbar />
        <Heros />

        <Routes>
          <Route exact path="/" component={Home} />
        </Routes>

        <About />
        <Tech />
        <LetTalk />

        <Footer />

        <Contact />

      </Router>


    </div>
  );
}

export default App;
