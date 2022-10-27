import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";



import Navbar from './components/Navbar';
import Heros from './components/Heros';
import About from './components/About';
import Tech from './components/Tech';
import Footer from './components/Footer';


import Home from './pages/Home';


// import Index from './pages/Index.jsx';

function App() {
  return (
    <div className="App">

<Router basename="/">

{/* Add Menu Component */}
<Navbar/>
<Heros/>

<Routes> 
  <Route exact path="/" component={Home}/>
</Routes>
 
  <About/>
    <Tech/>
  <Footer/>
</Router>
   

   
  

            
    

    </div>
  );
}

export default App;
