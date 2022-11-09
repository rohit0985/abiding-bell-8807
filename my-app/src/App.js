import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import MainRoutes from './Routes/MainRoutes';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <MainRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
