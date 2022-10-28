import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import Contact from './pages/Contact';
import Home from "./pages/Home";
import NotFound from "./pages/notFound";


function App() {
  return (
    <div className="App">
    <BrowserRouter>   
    <Navbar/>
    <Routes>


          <Route index element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NotFound/>} />



       

    
        </Routes>

        <Footer/>
</BrowserRouter>

    </div>
  );
}

export default App;
