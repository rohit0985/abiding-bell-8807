
import "./App.css";
import Footer from "./Components/Footer";
import MainRoutes from "./Routes/MainRoutes";
import Navbar from "./Components/NavBar";
import Men from "./Pages/Men/Men";


import logo from './logo.svg';
import './App.css';
import Footer from './Components/Footer';
import MainRoutes from './Routes/MainRoutes';
import Navbar from './Components/NavBar';


function App() {
  return (
    <div className="App">

      {/* <Navbar />
      <MainRoutes />
      <Footer /> */}
      <Men />


      <Navbar />
       <MainRoutes/>
      <Footer/>


    </div>
  );
}

export default App;
